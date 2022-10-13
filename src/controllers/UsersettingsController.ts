import API, {UsersettingsAPI} from '../api/UsersettingsAPI';
import store from '../utils/Store';
import {ChangeDataType, ChangePasswordType} from '../api/UsersettingsAPI';

export class UsersettingsController {
    private readonly api: UsersettingsAPI;

    constructor() {
        this.api = API;
    }

    async changeData(data: ChangeDataType) {
        try {
            // await this.api.changeData(data);
            this._saveUserData(data);
        } catch(error){
            console.error(error);
        }
    }

    async changeAvatar(data) {
        try {
            await this.api.changeAvatar(data);
        } catch(error) {
            console.error(error);
        }
    }

    async changePassword(data: ChangePasswordType) {
        try {
            // await this.api.changePassword(data);
            this._savePassword(data);
        } catch(error) {
            console.error(error);
        }
    }

    async searchUser(login) {
        const user = await this.api.searchUser(login);

        store.set('findUsers', user);
    }

    private async _saveUserData(data: ChangeDataType) {
        const userData = await this.api.changeData(data);

        store.set('user', userData);
    }

    private async _savePassword(data: ChangePasswordType) {
        const password = await this.api.changePassword(data);

        store.set('password', password);
    }
}

export default new UsersettingsController();
