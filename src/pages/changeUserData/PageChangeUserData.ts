import './style.less';
import Block from '../../utils/Block';
import template from './template.hbs';
import {Avatar} from '../../components/avatar/Avatar';
import {Input} from '../../components/input/Input';
import {Button} from '../../components/button/Button';
import {Util} from '../../utils/Util';

export class PageChangeUserData extends Block {
    public init(): void {
        const util = new Util();

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
                name: 'email',
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
                classWrapper: 'text',
                labelValue: 'Логин',
                placeholder: 'ivanivanov',
                type: 'text',
                name: 'login',
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
                classWrapper: 'text',
                labelValue: 'Имя',
                placeholder: 'Иван',
                type: 'text',
                name: 'first_name',
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
                classWrapper: 'text',
                labelValue: 'Фамилия',
                placeholder: 'Иванов',
                type: 'text',
                name: 'second_name',
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
            inputNikName: new Input({
                classWrapper: 'text',
                labelValue: 'Имя в чате',
                placeholder: 'Иван',
                type: 'text',
                name: 'name_in_chat'
            }),
            inputPhone: new Input({
                classWrapper: 'text',
                labelValue: 'Телефон',
                placeholder: '+7 (909) 967 30 30',
                type: 'tel',
                name: 'phone',
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
            buttonSave: new Button({
                id: this.id,
                value: 'Сохранить',
                type: 'submit',
                events: {
                    click: (evt: Event): void => {
                        evt.preventDefault();

                        console.log(util.getInputValues(
                            this.children.inputEmail,
                            this.children.inputLogin,
                            this.children.inputName,
                            this.children.inputSurname,
                            this.children.inputNikName,
                            this.children.inputPhone
                        ));

                        util.toggleClassName(this.children.inputEmail, 'show');
                        util.toggleClassName(this.children.inputLogin, 'show');
                        util.toggleClassName(this.children.inputName, 'show');
                        util.toggleClassName(this.children.inputSurname, 'show');
                        util.toggleClassName(this.children.inputPhone, 'show');
                    }
                }
            })
        }
    }

    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
