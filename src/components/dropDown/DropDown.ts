import './style.less';
import Block from '../../utils/Block';
import template from './template.hbs';
import {Button} from '../button/Button';
import store, {StoreEvents} from '../../utils/Store';
import {Input} from '../input/Input';
import UsersettingsController from '../../controllers/UsersettingsController';

export interface DropdownProps {
    addUser?: string;
    delUser?: string;
    showUsers?: string;
    photo?: string;
    file?: string;
    location?: string;
    classList?: Array<string>;
}

export class DropDown extends Block {
    constructor(props: DropdownProps) {
        const state = store.getState() || {};

        super(state || {});
    }

    public init(): void {
        store.on(StoreEvents.Updated, () => {
            const state = {
                dropdown: store.getState().dropdown
            }

            state.dropdown && this.setProps(state.dropdown);
        });

        this.children = {
            buttonAdd: new Button({
                id: this.id,
                classes: ['button-add'],
                type: 'button',
                events: {
                    click: () => {
                        this._searchUser();
                        store.set('addUserInChat', true);
                    }
                }
            }),
            buttonDel: new Button({
                id: this.id,
                classes: ['button-close'],
                type: 'button',
                events: {
                    click: () => {
                        this._searchUser();
                        store.set('addUserInChat', false);
                    }
                }
            }),
            buttonPhoto: new Button({
                id: this.id,
                classes: ['button-photo'],
                type: 'button'
            }),
            buttonFile: new Button({
                id: this.id,
                classes: ['button-file'],
                type: 'button'
            }),
            buttonLocation: new Button({
                id: this.id,
                classes: ['button-location'],
                type: 'button'
            })
        }
    }

    private _searchUser() {
        store.set('popup', {classList: ['show']});
        store.set('dropdown', {classList: ['hide']});
        store.set('popupChildrens', [
            new Input({
                classWrapper: 'input',
                type: 'text',
                name: 'searchLogin',
                classes: ['field__text'],
                placeholder: 'Логин',
                labelValue: 'поиск пользователя',
                validate: false,
            }),
            new Button({
                id: this.id,
                value: 'Поиск',
                type: 'submit',
                events: {
                    click: (evt: Event): void => {
                        evt.preventDefault();

                        const state = store.getState().popupChildrens;

                        if (state) {
                            const value = state
                                .map(children => children.element)
                                .find(element => element.querySelector('input'))
                                .querySelector('input').value

                            if (value) {
                                UsersettingsController.searchUser({login: value});
                            }
                        }
                    }
                }
            }),
        ])
    }

    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
