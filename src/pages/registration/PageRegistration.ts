import Block from '../../utils/Block';
import template from './template.hbs';
import './style.less';
import {Input} from '../../components/input/Input';
import {Button} from '../../components/button/Button';
import {Util} from '../../utils/Util';

export interface PageRegistrationProps {
    title: string;
}

export class PageRegistration extends Block {
    private _util: Util;

    constructor(props: PageRegistrationProps) {
        super(props);

        this._util = new Util();
    }

    public init(): void {
        this.children = {
            inputEmail: new Input({
                classWrapper: 'input',
                type: 'email',
                name: 'email',
                classes: ['field__email'],
                placeholder: 'Почта',
                labelValue: 'Почта',
                errorValue: 'Не верная почта',
                events: {
                    focusin: () => {
                        this._util.removeClassName(this.children.inputEmail, 'show');
                    },
                    focusout: () => {
                        this._util.toggleClassName(this.children.inputEmail, 'show');
                    }
                }
            }),
            inputLogin: new Input({
                classWrapper: 'input',
                type: 'text',
                name: 'login',
                classes: ['field__login'],
                placeholder: 'Логин',
                labelValue: 'Логин',
                errorValue: 'Не верный логин',
                events: {
                    focusin: () => {
                        this._util.removeClassName(this.children.inputLogin, 'show');
                    },
                    focusout: () => {
                        this._util.toggleClassName(this.children.inputLogin, 'show');
                    }
                }
            }),
            inputName: new Input({
                classWrapper: 'input',
                type: 'text',
                name: 'first_name',
                classes: ['field__name'],
                placeholder: 'Имя',
                labelValue: 'Имя',
                errorValue: 'Не верное имя',
                events: {
                    focusin: () => {
                        this._util.removeClassName(this.children.inputName, 'show');
                    },
                    focusout: () => {
                        this._util.toggleClassName(this.children.inputName, 'show');
                    }
                }
            }),
            inputSurname: new Input({
                classWrapper: 'input',
                type: 'text',
                name: 'second_name',
                classes: ['field__surname'],
                placeholder: 'Фамилия',
                labelValue: 'Фамилия',
                errorValue: 'Не верная фамилия',
                events: {
                    focusin: () => {
                        this._util.removeClassName(this.children.inputSurname, 'show');
                    },
                    focusout: () => {
                        this._util.toggleClassName(this.children.inputSurname, 'show');
                    }
                }
            }),
            inputPhone: new Input({
                classWrapper: 'input',
                type: 'tel',
                name: 'phone',
                classes: ['field__tel'],
                placeholder: 'Телефон',
                labelValue: 'Телефон',
                errorValue: 'Не верный телефон',
                events: {
                    focusin: () => {
                        this._util.removeClassName(this.children.inputPhone, 'show');
                    },
                    focusout: () => {
                        this._util.toggleClassName(this.children.inputPhone, 'show');
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
                errorValue: 'Не верный пароль',
                events: {
                    focusin: () => {
                        this._util.removeClassName(this.children.inputPassword, 'show');
                    },
                    focusout: () => {
                        this._util.toggleClassName(this.children.inputPassword, 'show');
                    }
                }
            }),
            inputPasswordRepeat: new Input({
                classWrapper: 'input',
                type: 'password',
                name: 'repeatPassword',
                classes: ['field__password'],
                placeholder: 'Пароль (еще раз)',
                labelValue: 'Пароль (еще раз)',
                errorValue: 'Пароли не совпадают'
            }),
            buttonAuthorize: new Button({
                id: 'button__aauthorization',
                value: 'Авторизоваться',
                type: 'button',
                events: {
                    click: (evt: Event): void => {
                        evt.preventDefault();

                        console.log(this._util.getInputValues(
                            this.children.inputName,
                            this.children.inputSurname,
                            this.children.inputLogin,
                            this.children.inputPassword,
                            this.children.inputEmail,
                            this.children.inputPhone,
                            this.children.inputPasswordRepeat
                        ));

                        this._util.toggleClassName(this.children.inputName, 'show');
                        this._util.toggleClassName(this.children.inputSurname, 'show');
                        this._util.toggleClassName(this.children.inputLogin, 'show');
                        this._util.toggleClassName(this.children.inputPassword, 'show');
                        this._util.toggleClassName(this.children.inputEmail, 'show');
                        this._util.toggleClassName(this.children.inputPhone, 'show');
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
