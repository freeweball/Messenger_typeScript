import './style.less';
import Block from '../../utils/Block';
import template from './template.hbs';
import {Avatar} from '../../components/avatar/Avatar';
import {Input} from '../../components/input/Input';
import {FieldLink} from '../../components/fieldLink/FieldLink';
import {Button} from '../../components/button/Button';
import router from '../../utils/Router';
import AuthController from '../../controllers/AuthController';
import store, {StoreEvents} from '../../utils/Store';
import {Routes} from '../..';
import UsersettingsController from '../../controllers/UsersettingsController';

export class PageUserSettings extends Block {
    constructor() {
        const state = store.getState() || {};

        super(state.user || {});
    }

    public init(): void {
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
                disabled: true,
                name: 'email'
            }),
            inputLogin: new Input({
                classWrapper: 'text',
                labelValue: 'Логин',
                placeholder: this.props.email,
                type: 'text',
                disabled: true,
                name: 'login'
            }),
            inputName: new Input({
                classWrapper: 'text',
                labelValue: 'Имя',
                placeholder: this.props.first_name,
                type: 'text',
                disabled: true,
                name: 'first_name'
            }),
            inputSurname: new Input({
                classWrapper: 'text',
                labelValue: 'Фамилия',
                placeholder: this.props.second_name,
                type: 'text',
                disabled: true,
                name: 'second_name'
            }),
            inputNikName: new Input({
                classWrapper: 'text',
                labelValue: 'Имя в чате',
                placeholder: this.props.display_name,
                type: 'text',
                disabled: true,
                name: 'display_name'
            }),
            inputPhone: new Input({
                classWrapper: 'text',
                labelValue: 'Телефон',
                placeholder: this.props.phone,
                type: 'tel',
                disabled: true,
                name: 'phone'
            }),
            linkData: new FieldLink({
                link: '#',
                text: 'Изменить данные',
                classModif: 'userSettings-1',
                events: {
                    click: (evt: Event): void => {
                        evt.preventDefault();
                        router.go(Routes.PageChangeUserData);
                    }
                }
            }),
            linkPassword: new FieldLink({
                link: '#',
                text: 'Изменить пароль',
                classModif: 'userSettings-2',
                events: {
                    click: (evt: Event): void => {
                        evt.preventDefault();
                        router.go(Routes.PageChangeUserPassword);
                    }
                }
            }),
            linkExit: new FieldLink({
                link: '#',
                text: 'Выйти',
                classModif: 'index fieldLink--red',
                events: {
                    click: (evt: Event): void => {
                        evt.preventDefault();
                        
                        AuthController.logout();
                    }
                }
            }),
            buttonGoToChat: new Button({
                id: this.id,
                classes: ['button-arrow'],
                type: 'button',
                events: {
                    click: () => {
                        router.go(Routes.PageChat);
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
