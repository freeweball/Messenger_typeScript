import Block from '../../utils/Block';
import template from './template.hbs';
import './style.less';
import {Input} from '../../components/input/Input';
import {Button} from '../../components/button/Button';
import {Util} from '../../utils/Util';

export interface PageAuthorizationProps {
    title: string;
}

export class PageAuthorization extends Block {
    private _util: Util;
    
    constructor(props: PageAuthorizationProps) {
        super(props);

        this._util = new Util();
    }

    public init(): void {
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
                        this._util.removeClassName(this.children.inputLogin, 'show');
                    },
                    focusout: () => {
                        this._util.toggleClassName(this.children.inputLogin, 'show');
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
                        this._util.removeClassName(this.children.inputPassword, 'show');
                    },
                    focusout: () => {
                        this._util.toggleClassName(this.children.inputPassword, 'show');
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
                        
                        console.log(this._util.getInputValues(
                            this.children.inputLogin,
                            this.children.inputPassword
                        ));

                        this._util.toggleClassName(this.children.inputLogin, 'show');
                        this._util.toggleClassName(this.children.inputPassword, 'show');                     
                    }
                }
            }),
            buttonAccountEmpty: new Button({
                id: 'button_account-empty',
                value: 'Нет аккаунта?',
                type: 'button',
                classes: ['button--white']
            })
        }
    }

    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
