import Block from '../../utils/Block';
import template from './template.hbs';
import './style.less';
import {Input} from '../../components/input/Input';
import {Button} from '../../components/button/Button';

export interface PageAuthorizationProps {
    title: string;
}

export class PageAuthorization extends Block {
    constructor(props: PageAuthorizationProps) {
        super('div', props);
    }

    init() {
        this.children = {
            inputLogin: new Input({
                classWrapper: 'input',
                type: 'text',
                name: 'login',
                classes: 'field__text',
                placeholder: 'Логин',
                labelValue: 'Логин',
                errorValue: 'Неверный логин'
            }),
    
            inputPassword: new Input({
                classWrapper: 'input',
                type: 'password',
                name: 'password',
                classes: 'field__password',
                placeholder: 'Пароль',
                labelValue: 'Пароль',
                errorValue: 'Неверный пароль'
            })
        }
        this.children.inputLogin = new Input({
            classWrapper: 'input',
            type: 'text',
            name: 'login',
            classes: 'field__text',
            placeholder: 'Логин',
            labelValue: 'Логин',
            errorValue: 'Неверный логин'
        });

        this.children.inputPassword = new Input({
            classWrapper: 'input',
            type: 'password',
            name: 'password',
            classes: 'field__password',
            placeholder: 'Пароль',
            labelValue: 'Пароль',
            errorValue: 'Неверный пароль'
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
            classes: "button--white"
        });
    }

    render() {
        return this.compile(template, this.props);
    }
}
