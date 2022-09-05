import Block from '../../utils/Block';
import template from './template.hbs';
import './style.less';
import {Input} from '../../components/input/Input';
import {Button} from '../../components/button/Button';

export interface PageRegistrationProps {
    title: string;
}

export class PageRegistration extends Block {
    constructor(props: PageRegistrationProps) {
        super('div', props);
    }

    init() {
        this.children.inputEmail = new Input({
            classWrapper: 'input',
            type: 'email',
            name: 'email',
            classes: 'field__email',
            placeholder: 'Почта',
            labelValue: 'Почта'
        });

        this.children.inputLogin = new Input({
            classWrapper: 'input',
            type: 'text',
            name: 'login',
            classes: 'field__login',
            placeholder: 'Логин',
            labelValue: 'Логин'
        });

        this.children.inputName = new Input({
            classWrapper: 'input',
            type: 'text',
            name: 'name',
            classes: 'field__name',
            placeholder: 'Имя',
            labelValue: 'Имя'
        });

        this.children.inputSurname = new Input({
            classWrapper: 'input',
            type: 'text',
            name: 'surname',
            classes: 'field__surname',
            placeholder: 'Фамилия',
            labelValue: 'Фамилия'
        });

        this.children.inputTel = new Input({
            classWrapper: 'input',
            type: 'tel',
            name: 'tel',
            classes: 'field__tel',
            placeholder: 'Телефон',
            labelValue: 'Телефон'
        });

        this.children.inputPassword = new Input({
            classWrapper: 'input',
            type: 'password',
            name: 'password',
            classes: 'field__password',
            placeholder: 'Пароль',
            labelValue: 'Пароль'
        });

        this.children.inputPasswordRepeat = new Input({
            classWrapper: 'input',
            type: 'password',
            name: 'password',
            classes: 'field__password',
            placeholder: 'Пароль (еще раз)',
            labelValue: 'Пароль (еще раз)',
            errorValue: 'Пароли не совпадают'
        });

        this.children.buttonAuthorize = new Button({
            id: 'button__aauthorization',
            value: 'Авторизоваться',
            type: 'button'
        });

        this.children.buttonAccountEmpty = new Button({
            id: 'button_account-empty',
            value: 'Нет аккаунта?',
            type: 'button',
            classes: 'button--white'
        });
    }

    render() {
        return this.compile(template, this.props);
    }
}
