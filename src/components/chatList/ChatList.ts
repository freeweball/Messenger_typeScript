import './style.less';
import Block from '../../utils/Block';
import template from './template.hbs';
import {Button} from '../button/Button';
import {Search} from '../search/Search';
import {Chat} from '../chat/chat';
import router from '../../utils/Router';
import ChatsController from '../../controllers/ChatsController';
import store, {StoreEvents} from '../../utils/Store';
import {Routes} from '../..';
export interface ChatListProps {

}

export class ChatList extends Block {
    constructor() {
        const state = store.getState() || {};

        super(state || {});
    }
    
    public init(): void {
        store.on(StoreEvents.Updated, () => {
            const state = {
                chats: store.getState().chats || [],
                usersInChat: store.getState().usersInChat || []
            }

            this._addChats(state.chats);
        });


        this.children = {
            buttonGoTo: new Button({
                id: this.id,
                value: 'Профиль',
                type: 'button',
                classes: ['button-go-to'],
                events: {
                    click: (evt: Event): void => {
                        evt.preventDefault();
                        router.go(Routes.PageUserSettings);
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

                        const element = this.children.addChatTitle.element;
                        const value = element.querySelector('input').value;

                        this._addChat(value);
                    }
                }
            }),
            addChatTitle: new Search({
                id: this.id,
                placeholder: 'Название чата',
                name: 'titleChat',
            }),
            search: new Search({
                id: this.id,
                placeholder: 'Поиск',
                name: 'search'
            }),
            childrens: []
        }
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

                    store.set('chatId', data.id);

                    ChatsController.getUsers(data.id);
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

        if (state.length !== this.children.childrens.length) {
            state.forEach((data: any) => childrens.push(this._createChat(data)));
            this.children.childrens = childrens;
            
            this.setProps(this.children.childrens);
        }
    }

    private async _addChat(value: string) {
        ChatsController.createChat({'title': value});
    }

    getUsers(idChat: number) {
        ChatsController.getUsers({id: idChat});
    }
  
    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
