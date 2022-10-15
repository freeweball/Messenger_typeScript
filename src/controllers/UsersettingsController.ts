import API, {SearchUserType, UsersettingsAPI} from '../api/UsersettingsAPI';
import store from '../utils/Store';
import {ChangeDataType, ChangePasswordType} from '../api/UsersettingsAPI';
import AuthController from './AuthController';

export class UsersettingsController {
    private readonly api: UsersettingsAPI;

    constructor() {
        this.api = API;
    }

    async changeData(data: ChangeDataType) {
        try {
            this._saveUserData(data);
        } catch(error){
            console.error(error);
        }
    }

    async changeAvatar(data: FormData) {
        try {
            this._saveAvatar(data);
        } catch(error) {
            console.error(error);
        }
    }

    async changePassword(data: ChangePasswordType) {
        try {
            this._savePassword(data);
        } catch(error) {
            console.error(error);
        }
    }

    async searchUser(login: SearchUserType) {
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

    private async _saveAvatar(data: FormData) {
        await this.api.changeAvatar(data);
        await AuthController.saveUser();
    }
}

export default new UsersettingsController();
