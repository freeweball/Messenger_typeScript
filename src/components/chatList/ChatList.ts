import Block from '../../utils/Block';
import template from './template.hbs';
import './style.less';
import {Button} from '../button/Button';
import {Search} from '../search/Search';
import {Chat} from '../chat/chat';

export interface ChatListProps {

}

export class ChatList extends Block {
    constructor(props: ChatListProps) {
        super(props);
    }

    public init(): void {
        this.children = {
            buttonGoTo: new Button({
                id: this.id,
                value: 'Профиль',
                type: 'button',
                classes: ['button-go-to']
            }),
            search: new Search({
                id: this.id
            }),
            chat: new Chat({
                chatImage: '',
                chatAlt: '',
                dialogTitle: 'Киноклуб',
                dialogSubText: 'Вы:',
                dialogText: 'Стиккер',
                infoTime: '12:00',
                infoCountIcon: 4
            })
        }
    }

    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
