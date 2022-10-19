import './style.less';
import Block from '../../utils/Block';
import template from './template.hbs';
import {Avatar} from '../../components/avatar/Avatar'
import {Input} from '../../components/input/Input';
import {Button} from '../../components/button/Button';
import {Util} from '../../utils/Util';
import {Routes} from '../..';
import UsersettingsController from '../../controllers/UsersettingsController';
import router from '../../utils/Router';
import store, {StoreEvents} from '../../utils/Store';

export class PageChangeUserPassword extends Block {
    constructor() {
        const state = store.getState() || {};

        super(state.password || {})
    }

    public init(): void {
        const util = new Util();

        store.on(StoreEvents.Updated, () => {
            const statePassword = store.getState().password || {};

            this.setProps(statePassword);
        });

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
                name: 'oldPassword',
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

                        const data = util.getInputValues(
                            this.children.inputPassword,
                            this.children.inputPasswordNew,
                        );

                        UsersettingsController.changePassword(data);

                        util.toggleClassName(this.children.inputPassword, 'show');
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

    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
