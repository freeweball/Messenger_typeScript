import './style.less';
import Block from '../../utils/Block';
import template from './template.hbs';
import {Button} from '../button/Button';
import {Search} from '../search/Search';
import {Chat} from '../chat/chat';
import router from '../../utils/Router';
import ChatsController from '../../controllers/ChatsController';
import UsersettingsController from '../../controllers/UsersettingsController';
import store, {StoreEvents} from '../../utils/Store';
import { withStore } from '../../utils/Store';
import { Socket } from '../../utils/Soccet';
export interface ChatListProps {

}

export class ChatList extends Block {
    constructor(props: ChatListProps) {
        super(props);
    }
    
    public init(): void {
        ChatsController.getChats();

        this.children = {
            buttonGoTo: new Button({
                id: this.id,
                value: 'Профиль',
                type: 'button',
                classes: ['button-go-to'],
                events: {
                    click: (evt: Event): void => {
                        evt.preventDefault();
                        router.go('/settings');
                    }
                }
            }),
            buttonAddChat: new Button({
                id: this.id,
                value: 'Добавить чат',
                type: 'button',
                classes: ['button-go-to'],
                events: {
                    click: (evt: Event): void => {
                        evt.preventDefault();
                        this._addChat();
                    }
                }
            }),
            search: new Search({
                id: this.id
            }),
            childrens: []
        }

        store.on(StoreEvents.Updated, () => {
            const stateChats = store.getState()?.chats;

            if (stateChats) {
                this._addChats(stateChats);
            }
        })
    }

    private _createChat(data: any) {
        return new Chat({
            id: data.id,
            chatImage: '',
            chatAlt: '',
            dialogTitle: data.title,
            dialogSubText: 'Вы:',
            dialogText: 'Стиккер',
            infoTime: new Date().toLocaleString('ru', {hour: 'numeric', minute: 'numeric',}),
            infoCountIcon: 4,
            events: {
                click: (evt: Event) => {
                    this._addActiveClass(evt);
                    ChatsController.getUsers(data.id);
                    UsersettingsController.searchUser({login: 'alex'})
                    ChatsController.addUsers({'users': [32, 6126, 5535], 'chatId': data.id});

                    const userId = store.getState().user.id;

                    ChatsController.getToken(data.id)
                        .then(value => {
                            const socket = new Socket(userId, data.id, value.token);
                        })
                }
            }
        })
    }

    private _addActiveClass(evt: Event) {
        const items = this.element?.querySelector('.chat__items')?.querySelectorAll('li');
        const trigger = evt.target?.closest('li');
        
        if (items && trigger) {
            [...items].forEach(item => item.classList.remove('active'));
            trigger.classList.add('active');
        }
    }

    private _addChats(state): void {
        const childrens = [];

        state.forEach((data: any) => childrens.push(this._createChat(data)));
        this.children.childrens = childrens;
        
        this.setProps(this.children.childrens);
    }

    private async _addChat() {
        ChatsController.createChat({'title': '000'})
    }

    getUsers(idChat: number) {
        ChatsController.getUsers({id: idChat});
    }
  
    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
