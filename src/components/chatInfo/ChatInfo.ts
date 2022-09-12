import Block from '../../utils/Block';
import template from './template.hbs';
import './style.less';
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
                delUser: 'Удалить пользователя'
            }),
            buttonInfo: new Button({
                id: this.id,
                classes: ['chat-info__menu-button'],
                type: 'button',
                events: {
                    click: () => {
                        this.setProps(this.children.dropDown.element?.classList.toggle('show'));
                    }
                }
            })
        };
    }

    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
