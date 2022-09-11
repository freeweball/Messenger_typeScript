import Block from "../../utils/Block";
import template from './template.hbs';
import './style.less';
import {ChatList} from "../../components/chatList/ChatList";
import {ChatInfo} from "../../components/chatInfo/ChatInfo";
import {ChatContent} from "../../components/chatContent/ChatContent";
import {ChatInput} from "../../components/chatInput/ChatInput";

export interface PageChatProps {

}

export class PageChat extends Block {
    constructor(props: PageChatProps) {
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
