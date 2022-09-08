import Block from '../../utils/Block';
import template from './template.hbs';
import './style.less';
import {Avatar} from '../../components/avatar/Avatar';
import {Input} from '../../components/input/Input';
import {Button} from '../../components/button/Button';

export interface PageChangeUserDataProps {

}

export class PageChangeUserData extends Block {
    constructor(props: PageChangeUserDataProps) {
        super(props);
    }

    public init(): void {
        this.children = {
            avatar: new Avatar({
                url: 'img/avatar.png',
                alt: 'avatar',
                text: 'Поменять аватар',
                title: 'Иван'
            }),
            inputEmail: new Input({
                classWrapper: 'text',
                labelValue: 'Почта',
                placeholder: 'pochta@yandex.ru',
                type: 'text',
                disabled: 'disabled',
                name: 'email'
            }),
            inputLogin: new Input({
                classWrapper: 'text',
                labelValue: 'Логин',
                placeholder: 'ivanivanov',
                type: 'text',
                disabled: 'disabled',
                name: 'login'
            }),
            inputName: new Input({
                classWrapper: 'text',
                labelValue: 'Имя',
                placeholder: 'Иван',
                type: 'text',
                disabled: 'disabled',
                name: 'first_name'
            }),
            inputSurname: new Input({
                classWrapper: 'text',
                labelValue: 'Фамилия',
                placeholder: 'Иванов',
                type: 'text',
                disabled: 'disabled',
                name: 'second_name'
            }),
            inputNikName: new Input({
                classWrapper: 'text',
                labelValue: 'Имя в чате',
                placeholder: 'Иван',
                type: 'text',
                disabled: 'disabled',
                name: 'name_in_chat'
            }),
            inputPhone: new Input({
                classWrapper: 'text',
                labelValue: 'Телефон',
                placeholder: '+7 (909) 967 30 30',
                type: 'tel',
                disabled: 'disabled',
                name: 'phone'
            }),
            buttonSave: new Button({
                id: this.id,
                value: 'Сохранить',
                type: 'submit'
            })
        }
    }

    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
