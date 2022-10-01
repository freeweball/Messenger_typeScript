import './style.less';
import Block from '../../utils/Block';
import template from './template.hbs';
import {Avatar} from '../../components/avatar/Avatar'
import {Input} from '../../components/input/Input';
import {Button} from '../../components/button/Button';
import {Util} from '../../utils/Util';

export class PageChangeUserPassword extends Block {
    public init(): void {
        const util = new Util();

        this.children = {
            avatar: new Avatar({
                url: 'img/avatar.png',
                alt: 'avatar',
                text: 'Поменять аватар',
                title: 'Иван'
            }),
            inputPassword: new Input({
                classWrapper: 'text',
                type: 'password',
                name: 'password',
                placeholder: '•••••••••',
                labelValue: 'Старый пароль',
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
            inputPasswordNew: new Input({
                classWrapper: 'text',
                type: 'password',
                name: 'newPassword',
                placeholder: '•••••••••',
                labelValue: 'Новый пароль',
            }),
            inputPasswordRepeat: new Input({
                classWrapper: 'text',
                type: 'password',
                name: 'repeatPassword',
                placeholder: '•••••••••',
                labelValue: 'Повторите новый пароль',
                errorValue: 'Пароли не совпадают'
            }),
            buttonSave: new Button({
                id: this.id,
                value: 'Сохранить',
                type: 'submit',
                events: {
                    click: (evt: Event): void => {
                        evt.preventDefault();

                        console.log(util.getInputValues(
                            this.children.inputPassword,
                            this.children.inputPasswordNew,
                            this.children.inputPasswordRepeat
                        ));

                        util.toggleClassName(this.children.inputPassword, 'show');
                    }
                }
            })
        }
    }

    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
