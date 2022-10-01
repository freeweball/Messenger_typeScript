import './style.less';
import Block from '../../utils/Block';
import template from './template.hbs';
import {Input} from '../../components/input/Input';
import {Button} from '../../components/button/Button';
import {Util} from '../../utils/Util';
import router from '../../utils/Router';

export class PageAuthorization extends Block {
    public init(): void {
        const util = new Util();

        this.children = {
            inputLogin: new Input({
                classWrapper: 'input',
                type: 'text',
                name: 'login',
                classes: ['field__text'],
                placeholder: 'Логин',
                labelValue: 'Логин',
                errorValue: 'Неверный логин',
                validate: true,
                events: {
                    focusin: () => {
                        util.removeClassName(this.children.inputLogin, 'show');
                    },
                    focusout: () => {
                        util.toggleClassName(this.children.inputLogin, 'show');
                    }
                }
            }),
            inputPassword: new Input({
                classWrapper: 'input',
                type: 'password',
                name: 'password',
                classes: ['field__password'],
                placeholder: 'Пароль',
                labelValue: 'Пароль',
                errorValue: 'Неверный пароль',
                validate: true,
                events: {
                    focusin: () => {
                        util.removeClassName(this.children.inputPassword, 'show');
                    },
                    focusout: () => {
                        util.toggleClassName(this.children.inputPassword, 'show');
                    }
                }
            }),
            buttonAuthorize: new Button({
                id: 'button__aauthorization',
                value: 'Авторизоваться',
                type: 'button',
                events: {
                    click: (evt: Event): void => {
                        evt.preventDefault();
                        
                        console.log(util.getInputValues(
                            this.children.inputLogin,
                            this.children.inputPassword
                        ));

                        util.toggleClassName(this.children.inputLogin, 'show');
                        util.toggleClassName(this.children.inputPassword, 'show');                     
                    }
                }
            }),
            buttonAccountEmpty: new Button({
                id: 'button_account-empty',
                value: 'Нет аккаунта?',
                type: 'button',
                classes: ['button--white'],
                events: {
                    click: (evt: Event): void => {
                        evt.preventDefault();
                        router.go('/registration');
                    }
                }
            })
        }
    }

    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
