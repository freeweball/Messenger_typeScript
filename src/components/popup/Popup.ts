import './style.less';
import Block from '../../utils/Block';
import template from './template.hbs';
import store, {StoreEvents} from '../../utils/Store';
import {Input} from '../input/Input';
import ChatsController from '../../controllers/ChatsController';

export interface PopupProps {
    title?: string;
    text?: string;
    classList?: Array<string>;
    button?: (...args: any) => Block;
    events?: {
        click: (evt: Event) => void;
    };
}

export class Popup extends Block {
    constructor(props: PopupProps) {
        super(props);
    }

    init() {
        store.on(StoreEvents.Updated, () => {
            const state = {
                childrens: store.getState().popupChildrens,
                findUsers: store.getState().findUsers,
                addUserInChat: store.getState().addUserInChat
            }

            if (state.childrens?.length) {
                this._addChildrens(state.childrens);
                this._addChildrens(this._createChildrens(state.findUsers, state.addUserInChat));
            }
        });

        this.children.childrens = [];
    }

    private _addChildrens(state: Array<Block>): void {
        const childrens: Array<Block> = [];

        if (state?.length != this.children.childrens.length) {
            state.forEach((children: Block) => childrens.push(children));
            this.children.childrens = childrens;

            this.setProps(this.children.childrens);
        }
    }

    private _createChildrens(state: any, addUser: boolean): Array<Block> {
        const childrens: Array<Block> = [];
        
        if (state) {
            state.forEach(user => {
                childrens.push(
                    new Input({
                        classWrapper: 'text',
                        labelValue: addUser ? 'Добавить' : 'Удалить',
                        placeholder: `login: ${user.login} id: ${user.id}`,
                        type: 'text',
                        disabled: true,
                        name: 'name',
                        id: user.id,
                        events: {
                            click: () => {
                                const chatId = store.getState().chatId

                                if (chatId) {
                                    if (addUser) {
                                        ChatsController.addUsers({users: [user.id], chatId});
                                    } else {
                                        ChatsController.deleteUsers({users: [user.id], chatId});
                                    }
                                }
                            }
                        }
                    }),
                )
            });
        }

        return childrens;
    }

    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
