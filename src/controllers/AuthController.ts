import API, {AuthAPI, SigninType, SignupType} from '../api/AuthAPI';
import store from '../utils/Store';
import router from '../utils/Router';

export class AuthController {
    private readonly api: AuthAPI;

    constructor() {
        this.api = API;
    }

    async signin(data: SigninType) {
        try {
            await this.api.signin(data);

            router.go('/settings');
        } catch (error: any) {
            console.error(error);
        }
    }

    async signup(data: SignupType) {
        try {
            await this.api.signup(data);
            
            await this.fetchUser();

            router.go('/settings');
        } catch (error: any) {
            console.error(error.message);
        }
    }

    async fetchUser() {
        const user = await this.api.read();

        store.set('user', user);
    }

    async logout() {
        try {
            await this.api.logout();

            router.go('/');
        } catch(error: any) {
            console.error(error.message);
        }
    }
}

export default new AuthController();
