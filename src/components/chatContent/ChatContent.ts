import './style.less';
import Block from '../../utils/Block';
import template from './template.hbs';
import {Message, MessageType} from '../message/Message';
import store, {StoreEvents} from '../../utils/Store';
import {Button} from '../button/Button';
import ChatsController from '../../controllers/ChatsController';

export interface ChatContentProps {
    dummyText: string;
}

export class ChatContent extends Block {
    constructor(props: ChatContentProps) {
        super(props);
    }

    public init(): void {
        store.on(StoreEvents.Updated, () => {
            this.children.users = store.getState()?.users?.map((user: any) => new Button({value: user.id, type: 'button', id: user.id, classes: ['user__inChat']}));
            this.setProps({users: store.getState().users} || {});
        });

        this.children.childrens = [];
        this.children.users = [];
    }

    private _addMessage(state): void {
        const childrens = [];

        childrens.push(this._createMessage(state));
        this.children.childrens = childrens;
        
        this.setProps(this.children.childrens);
    }

    private _createMessage(data: MessageType) {
        return new Message({
            classes: data.classes,
            date: data.date,
            content: data.content,
            time: data.time
        })
    }

    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
