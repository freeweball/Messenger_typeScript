import './style.less';
import Block from '../../utils/Block';
import template from './template.hbs';
import {Input} from '../../components/input/Input';
import {Button} from '../../components/button/Button';
import {Util} from '../../utils/Util';
import router from '../../utils/Router';

export class PageRegistration extends Block {
    public init(): void {
        const util = new Util();
        
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
                        util.removeClassName(this.children.inputEmail, 'show');
                    },
                    focusout: () => {
                        util.toggleClassName(this.children.inputEmail, 'show');
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
                        util.removeClassName(this.children.inputLogin, 'show');
                    },
                    focusout: () => {
                        util.toggleClassName(this.children.inputLogin, 'show');
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
                        util.removeClassName(this.children.inputName, 'show');
                    },
                    focusout: () => {
                        util.toggleClassName(this.children.inputName, 'show');
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
                        util.removeClassName(this.children.inputSurname, 'show');
                    },
                    focusout: () => {
                        util.toggleClassName(this.children.inputSurname, 'show');
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
                        util.removeClassName(this.children.inputPhone, 'show');
                    },
                    focusout: () => {
                        util.toggleClassName(this.children.inputPhone, 'show');
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
                        util.removeClassName(this.children.inputPassword, 'show');
                    },
                    focusout: () => {
                        util.toggleClassName(this.children.inputPassword, 'show');
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
                value: 'Зарегистрироваться',
                type: 'button',
                events: {
                    click: (evt: Event): void => {
                        evt.preventDefault();

                        console.log(util.getInputValues(
                            this.children.inputName,
                            this.children.inputSurname,
                            this.children.inputLogin,
                            this.children.inputPassword,
                            this.children.inputEmail,
                            this.children.inputPhone,
                            this.children.inputPasswordRepeat
                        ));

                        util.toggleClassName(this.children.inputName, 'show');
                        util.toggleClassName(this.children.inputSurname, 'show');
                        util.toggleClassName(this.children.inputLogin, 'show');
                        util.toggleClassName(this.children.inputPassword, 'show');
                        util.toggleClassName(this.children.inputEmail, 'show');
                        util.toggleClassName(this.children.inputPhone, 'show');
                    }
                }
            }),
            buttonAccountEmpty: new Button({
                id: 'button_account-empty',
                value: 'Войти',
                type: 'button',
                classes: ['button--white'],
                events: {
                    click: (evt: Event): void => {
                        evt.preventDefault();
                        router.go('/');
                    }
                }
            })
        }
    }

    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
