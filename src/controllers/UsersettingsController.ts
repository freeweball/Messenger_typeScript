import API, {UsersettingsAPI} from '../api/UsersettingsAPI';
import store from '../utils/Store';

export class UsersettingsController {
    private readonly api: UsersettingsAPI;

    constructor() {
        this.api = API;
    }

    async changeData(data) {
        try {
            return await this.api.changeData(data);
        } catch(error){
            console.error(error);
        }
    }

    async changeAvatar(data) {
        try {
            return await this.api.changeAvatar(data);
        } catch(error) {
            console.error(error);
        }
    }

    async changePassword(data) {
        try {
            return await this.api.changePassword(data);
        } catch(error) {
            console.error(error);
        }
    }

    async searchUser(login) {
        const user = await this.api.searchUser(login);

        store.set('findUsers', user);
    }
}

export default new UsersettingsController();
