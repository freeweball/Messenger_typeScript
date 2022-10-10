import './style.less';
import Block from "../../utils/Block";
import template from './template.hbs';
import {ChatList} from "../../components/chatList/ChatList";
import {ChatInfo} from "../../components/chatInfo/ChatInfo";
import {ChatContent} from "../../components/chatContent/ChatContent";
import {ChatInput} from "../../components/chatInput/ChatInput";
import {withStore} from '../../utils/Store';

class ChatPage extends Block {
    constructor(props) {
        super(props);
    }

    public init(): void {
        this.children = {
            chatList: new ChatList({}),
            chatInfo: new ChatInfo({
                name: 'Вадим'
            }),
            chatContent: new ChatContent({
                dummyText: 'Выберите чат чтобы отправить сообщение'
            }),
            chatInput: new ChatInput({})
        }
    }

    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}

const withPageChat = withStore ((state) => ({...state.chats}))

export const PageChat = withPageChat(ChatPage);
