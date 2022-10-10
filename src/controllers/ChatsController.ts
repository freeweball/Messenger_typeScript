import API, {ChatsAPI, CreateChatType, AddusersChatType, GetUsers, GetTokenType} from '../api/ChatsAPI';
import store from '../utils/Store';

export class ChatsController {
    private readonly api: ChatsAPI;

    constructor() {
        this.api = API;
    }

    public async getChats(): Promise<void> {
        try {
            await this.api.getChats();

            await this._saveChats();
        } catch(error) {
            console.error(error);
        }
    }

    public async createChat(data: CreateChatType) {
        try {
            await this.api.createChat(data);

            await this._saveChats();
        } catch(error) {
            console.error(error);
        }
    }

    public async addUsers(data: AddusersChatType) {
        try {
            await this.api.addUsers(data);

            await this._saveUsers(data.chatId);
        } catch(error) {
            console.error(error);
        }
    }

    public async deleteUsers(data: AddusersChatType) {
        try {
            await this.api.deleteUsers(data);

            await this._saveUsers(data.chatId);
        } catch(error) {
            console.error(error);
        }
    }

    public async getUsers(id: GetUsers) {
        try {
            await this.api.getUsers(id);

            await this._saveUsers(id);
        } catch(error) {
            console.error(error);
        }
    }

    public async getToken(id: GetTokenType) {
        try {
            return await this.api.getToken(id);

            // await this._saveToken(id);
        } catch(error) {
            console.error(error);
        }
    }

    private async _saveChats() {
        const chats = await this.api.getChats();

        store.set('chats', chats);
    }

    private async _saveUsers(id: GetUsers) {
        const users = await this.api.getUsers(id);

        store.set('users', users);
    }

    // private async _saveToken(id: GetTokenType) {
    //     const token = await this.api.getToken(id);

    //     store.set('token', token)
    // }
}

export default new ChatsController();
