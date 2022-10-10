import './style.less';
import Block from '../../utils/Block';
import template from './template.hbs';
import {Button} from '../button/Button';
import {DropDown} from '../dropDown/DropDown';

export interface ChatInfoProps {
    url?: string;
    alt?: string;
    name: string;
}

export class ChatInfo extends Block {
    constructor(props: ChatInfoProps) {
        super(props);
    }

    public init(): void {
        this.children = {
            dropDown: new DropDown({
                addUser: 'Добавить пользователя',
                delUser: 'Удалить пользователя',
                showUsers: 'Показать список пользователей'
            }),
            buttonInfo: new Button({
                id: this.id,
                classes: ['chat-info__menu-button'],
                type: 'button',
                events: {
                    click: () => {
                        this.children.dropDown.element?.classList.toggle('show');
                    }
                }
            })
        };
    }

    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
