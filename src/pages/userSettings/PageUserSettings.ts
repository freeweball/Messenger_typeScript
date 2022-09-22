import Block from '../../utils/Block';
import template from './template.hbs';
import './style.less';
import {Avatar} from '../../components/avatar/Avatar';
import {Input} from '../../components/input/Input';
import {FieldLink} from '../../components/fieldLink/FieldLink';
import {Popup} from '../../components/popup/Popup';
import {Button} from '../../components/button/Button';

export interface PageUserSettingsProps {
    title: string;
}

export class PageUserSettings extends Block {
    constructor(props: PageUserSettingsProps) {
        super(props);
    }

    public init(): void {
        this.children = {
            avatar: new Avatar({
                url: 'img/avatar.png',
                alt: 'avatar',
                text: 'Поменять аватар',
                title: 'Иван',
                events: {
                    click: () => {
                        this.children.popup = new Popup({
                            title: 'Загрузите файл',
                            text: 'Выбрать файл на компьютере',
                            button: () => new Button({
                                id: this.id,
                                value: 'Поменять',
                                type: ' button'
                            })
                        });
                        this.eventBus().emit(Block.EVENTS.FLOW_CDU);
                    },
                }
            }),
            inputEmail: new Input({
                classWrapper: 'text',
                labelValue: 'Почта',
                placeholder: 'pochta@yandex.ru',
                type: 'text',
                disabled: true,
                name: 'email'
            }),
            inputLogin: new Input({
                classWrapper: 'text',
                labelValue: 'Логин',
                placeholder: 'ivanivanov',
                type: 'text',
                disabled: true,
                name: 'login'
            }),
            inputName: new Input({
                classWrapper: 'text',
                labelValue: 'Имя',
                placeholder: 'Иван',
                type: 'text',
                disabled: true,
                name: 'first_name'
            }),
            inputSurname: new Input({
                classWrapper: 'text',
                labelValue: 'Фамилия',
                placeholder: 'Иванов',
                type: 'text',
                disabled: true,
                name: 'second_name'
            }),
            inputNikName: new Input({
                classWrapper: 'text',
                labelValue: 'Имя в чате',
                placeholder: 'Иван',
                type: 'text',
                disabled: true,
                name: 'name_in_chat'
            }),
            inputPhone: new Input({
                classWrapper: 'text',
                labelValue: 'Телефон',
                placeholder: '+7 (909) 967 30 30',
                type: 'tel',
                disabled: true,
                name: 'phone'
            }),
            linkData: new FieldLink({
                link: '#',
                text: 'Изменить данные',
                classModif: 'userSettings-1'
            }),
            linkPassword: new FieldLink({
                link: '#',
                text: 'Изменить пароль',
                classModif: 'userSettings-2'
            }),
            linkExit: new FieldLink({
                link: '#',
                text: 'Выйти',
                classModif: 'index fieldLink--red'
            }),
        }
    }

    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
