import './style.less';
import Block from '../../utils/Block';
import template from './template.hbs';
import {Button} from '../button/Button';
import store from '../../utils/Store';
import ChatsController from '../../controllers/ChatsController';

export interface DropdownProps {
    addUser?: string;
    delUser?: string;
    showUsers?: string;
    photo?: string;
    file?: string;
    location?: string;
}

export class DropDown extends Block {
    constructor(props: DropdownProps) {
        super(props);
    }

    public init(): void {
        this.children = {
            buttonAdd: new Button({
                id: this.id,
                classes: ['button-add'],
                type: 'button'
            }),
            buttonDel: new Button({
                id: this.id,
                classes: ['button-close'],
                type: 'button'
            }),
            buttonShow: new Button({
                id: this.id,
                classes: ['button-close'],
                type: 'button',
                events: {
                    click: () => {
                        ChatsController.getChats();
                        const chats = store.getState().chats;
                        console.log(chats)
                    }
                }
            }),
            buttonPhoto: new Button({
                id: this.id,
                classes: ['button-photo'],
                type: 'button'
            }),
            buttonFile: new Button({
                id: this.id,
                classes: ['button-file'],
                type: 'button'
            }),
            buttonLocation: new Button({
                id: this.id,
                classes: ['button-location'],
                type: 'button'
            })
        }
    }

    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
