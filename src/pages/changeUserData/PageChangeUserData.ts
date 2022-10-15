import './style.less';
import Block from '../../utils/Block';
import template from './template.hbs';
import {Avatar} from '../../components/avatar/Avatar';
import {Input} from '../../components/input/Input';
import {Button} from '../../components/button/Button';
import {Util} from '../../utils/Util';
import UsersettingsController from '../../controllers/UsersettingsController';
import store, {StoreEvents} from '../../utils/Store';
import router from '../../utils/Router';
import {Routes} from '../..';


export class PageChangeUserData extends Block {
    constructor() {
        const state = store.getState() || {};

        super(state.user || {});
    }

    public init(): void {
        const util = new Util();
        const http = 'https://ya-praktikum.tech/api/v2/resources';

        store.on(StoreEvents.Updated, () => {
            const stateUser = store.getState().user || {};
            
            this.setProps(stateUser);
            this.children.avatar.setProps({url: `${http}${this.props.avatar}`});
        });

        this.children = {
            avatar: new Avatar({
                url: `${http}${this.props.avatar}`,
                alt: 'avatar',
                text: 'Поменять аватар',
                title: 'Иван',
                events: {
                    click: () => {
                        const input = this.element?.querySelector('input');

                        input && this._changeAvatar(input);
                    }
                }
            }),
            inputEmail: new Input({
                classWrapper: 'text',
                labelValue: 'Почта',
                placeholder: this.props.email,
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
                placeholder: this.props.login,
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
                placeholder: this.props.first_name,
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
                placeholder: this.props.second_name,
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
                placeholder: this.props.display_name,
                type: 'text',
                name: 'display_name'
            }),
            inputPhone: new Input({
                classWrapper: 'text',
                labelValue: 'Телефон',
                placeholder: this.props.phone,
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
                        
                        const data = util.getInputValues(
                            this.children.inputEmail,
                            this.children.inputLogin,
                            this.children.inputName,
                            this.children.inputSurname,
                            this.children.inputNikName,
                            this.children.inputPhone
                        );

                        UsersettingsController.changeData(data);
                            
                        util.toggleClassName(this.children.inputEmail, 'show');
                        util.toggleClassName(this.children.inputLogin, 'show');
                        util.toggleClassName(this.children.inputName, 'show');
                        util.toggleClassName(this.children.inputSurname, 'show');
                        util.toggleClassName(this.children.inputPhone, 'show');
                    }
                }
            }),
            buttonGoToSettings: new Button({
                id: this.id,
                classes: ['button-arrow'],
                type: 'button',
                events: {
                    click: () => {
                        router.go(Routes.PageUserSettings);
                    }
                }
            })
        }
    }

    private _changeAvatar(element: any) {
        element?.addEventListener('change', () => {
            const file = element?.files?.[0];

            if (file) {
                const formData = new FormData();
                
                formData.append('avatar', file);
                UsersettingsController.changeAvatar(formData);
            }
        })
    }

    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
