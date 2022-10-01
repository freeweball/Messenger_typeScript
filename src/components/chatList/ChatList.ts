import './style.less';
import Block from '../../utils/Block';
import template from './template.hbs';
import {Button} from '../button/Button';
import {Search} from '../search/Search';
import {Chat} from '../chat/chat';
import router from '../../utils/Router';

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
                classes: ['button-go-to'],
                events: {
                    click: (evt: Event): void => {
                        evt.preventDefault();
                        router.go('/settings');
                    }
                }
            }),
            search: new Search({
                id: this.id
            }),
            childrens: [
                new Chat({
                    chatImage: '',
                    chatAlt: '',
                    dialogTitle: 'Киноклуб',
                    dialogSubText: 'Вы:',
                    dialogText: 'Стиккер',
                    infoTime: new Date().toLocaleString('ru', {hour: 'numeric', minute: 'numeric',}),
                    infoCountIcon: 4
                }),
                new Chat({
                    chatImage: '',
                    chatAlt: '',
                    dialogTitle: 'Флудилка',
                    dialogText: 'Стиккер',
                    infoTime: new Date().toLocaleString('ru', {hour: 'numeric', minute: 'numeric',}),
                    infoCountIcon: 4
                })
            ]
        }
    }

    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
