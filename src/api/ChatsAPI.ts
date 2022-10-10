import BaseAPI from './BaseAPI';
import {UserType} from './AuthAPI';

export type ChatsType = Array<{
    id: number;
    title: string;
    avatar: string;
    unread_count: number;
    last_message: {
        user: UserType;
        time: string;
        content: string;
    }
}>

export type CreateChatType = {
    title: string;
}

export type AddusersChatType = {
    users: Array<number>;
    chatId: number;
}

export type GetUsers = {
    id: number;
}

export type GetTokenType = {
    id: number;
}

export class ChatsAPI extends BaseAPI {
    constructor() {
        super('/chats');
    }

    getChats(): Promise<ChatsType> {
        return this.http.get('');
    }

    createChat(data: CreateChatType): Promise<unknown> {
        return this.http.post('', data);
    }

    addUsers(data: AddusersChatType): Promise<unknown> {
        return this.http.put('/users', data);
    }

    deleteUsers(data: AddusersChatType): Promise<unknown> {
        return this.http.delete('/users', data);
    }

    getUsers(id: GetUsers): Promise<Array<UserType>> {
        return this.http.get(`/${id}/users`);
    }

    getToken(id: GetTokenType) {
        return this.http.post(`/token/${id}`);
    }

    create = undefined;
    update = undefined;
    delete = undefined;
    read = undefined;
}

export default new ChatsAPI();
