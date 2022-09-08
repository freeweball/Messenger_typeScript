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
        super(props);
    }

    public init(): void {
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
            }),
            buttonAuthorize: new Button({
                id: 'button__aauthorization',
                value: 'Авторизоваться',
                type: 'button'
            }),
            buttonAccountEmpty: new Button({
                id: 'button_account-empty',
                value: 'Нет аккаунта?',
                type: 'button',
                classes: "button--white"
            })
        }
    }

    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
