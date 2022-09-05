import Block from '../../utils/Block';
import template from './template.hbs';
import './style.less';
import {Avatar} from '../../components/avatar/Avatar'
import {Input} from '../../components/input/Input';
import {Button} from '../../components/button/Button';

export interface PageChangeUserPasswordProps {

}

export class PageChangeUserPassword extends Block {
    constructor(props: PageChangeUserPasswordProps) {
        super('div', props);
    }

    init() {
        this.children.avatar = new Avatar({
            url: 'img/avatar.png',
            alt: 'avatar',
            text: 'Поменять аватар',
            title: 'Иван'
        });

        this.children.inputPassword = new Input({
            classWrapper: 'text',
            type: 'password',
            name: 'password',
            placeholder: '•••••••••',
            labelValue: 'Старый пароль',
            errorValue: 'Не верный пароль'
        });

        this.children.inputPasswordNew = new Input({
            classWrapper: 'text',
            type: 'password',
            name: 'password',
            placeholder: '•••••••••',
            labelValue: 'Новый пароль',
        });

        this.children.inputPasswordRepeat = new Input({
            classWrapper: 'text',
            type: 'password',
            name: 'password',
            placeholder: '•••••••••',
            labelValue: 'Повторите новый пароль',
            errorValue: 'Пароли не совпадают'
        });

        this.children.buttonSave = new Button({
            id: this.id,
            value: 'Сохранить',
            type: 'submit'
        })
    }

    render() {
        return this.compile(template, this.props);
    }
}
