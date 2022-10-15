import './style.less';
import Block from "../../utils/Block";
import template from './template.hbs';
import {ChatList} from "../../components/chatList/ChatList";
import {ChatInfo} from "../../components/chatInfo/ChatInfo";
import {ChatContent} from "../../components/chatContent/ChatContent";
import {ChatInput} from "../../components/chatInput/ChatInput";
import store, {StoreEvents, withStore} from '../../utils/Store';
import ChatsController from '../../controllers/ChatsController';
import {Popup} from '../../components/popup/Popup';

class ChatPage extends Block {
    constructor() {
        const state = store.getState() || {};

        super(state || {});
    }

    public init(): void {
        store.on(StoreEvents.Updated, () => {
            const state = {
                popup: store.getState().popup
            }

            this.children.popup.setProps(state.popup);


        });

        ChatsController.getChats();

        this.children = {
            chatList: new ChatList({}),
            chatInfo: new ChatInfo({
                name: 'Вадим'
            }),
            chatContent: new ChatContent({
                dummyText: 'Выберите чат чтобы отправить сообщение'
            }),
            chatInput: new ChatInput({}),
            popup: new Popup({
                classList: ['hide'],
                events: {
                    click: (evt) => {
                        if (!evt.target?.closest('.popup')) {
                            store.set('popup', {classList: ['hide']});
                            store.set('popupChildrens', []);
                            store.set('findUsers', []);
                        }
                    }
                }
            })
        }
    }

    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}

const withPageChat = withStore ((state) => ({...state.chats}))

export const PageChat = withPageChat(ChatPage);
