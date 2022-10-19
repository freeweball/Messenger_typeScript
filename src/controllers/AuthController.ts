import API, {AuthAPI, SigninType, SignupType} from '../api/AuthAPI';
import store from '../utils/Store';
import router from '../utils/Router';
import {Routes} from '..';

export class AuthController {
    private readonly api: AuthAPI;

    constructor() {
        this.api = API;
    }

    public async signin(data: SigninType) {
        try {
            await this.api.signin(data);

            router.go(Routes.PageUserSettings);

            await this.saveUser();
        } catch (error: any) {
            console.error(error);
        }
    }

    public async signup(data: SignupType) {
        try {
            await this.api.signup(data);
            
            router.go(Routes.PageUserSettings);
            
            await this.saveUser();
        } catch (error: any) {
            console.error(error.message);
        }
    }

    public async logout() {
        try {
            await this.api.logout();

            router.go(Routes.PageAuthorization);
        } catch(error: any) {
            console.error(error.message);
        }
    }

    public async saveUser() {
        const user = await this.api.read();

        store.set('user', user);
    }
}

export default new AuthController();
