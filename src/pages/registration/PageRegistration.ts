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
                labelValue: 'Почта'
            }),
            inputLogin: new Input({
                classWrapper: 'input',
                type: 'text',
                name: 'login',
                classes: ['field__login'],
                placeholder: 'Логин',
                labelValue: 'Логин'
            }),
            inputName: new Input({
                classWrapper: 'input',
                type: 'text',
                name: 'first_name',
                classes: ['field__name'],
                placeholder: 'Имя',
                labelValue: 'Имя'
            }),
            inputSurname: new Input({
                classWrapper: 'input',
                type: 'text',
                name: 'second_name',
                classes: ['field__surname'],
                placeholder: 'Фамилия',
                labelValue: 'Фамилия'
            }),
            inputPhone: new Input({
                classWrapper: 'input',
                type: 'tel',
                name: 'phone',
                classes: ['field__tel'],
                placeholder: 'Телефон',
                labelValue: 'Телефон'
            }),
            inputPassword: new Input({
                classWrapper: 'input',
                type: 'password',
                name: 'password',
                classes: ['field__password'],
                placeholder: 'Пароль',
                labelValue: 'Пароль'
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
                            this.children.inputEmail,
                            this.children.inputLogin,
                            this.children.inputName,
                            this.children.inputSurname,
                            this.children.inputTel,
                            this.children.inputPassword,
                            this.children.inputPasswordRepeat
                        ))
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
