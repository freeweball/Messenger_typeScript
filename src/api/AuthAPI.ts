import BaseAPI from './BaseAPI';

export type SigninType = {
    login: string;
    password: string;
}

export type SignupType = {
    first_name: string;
    second_name: string;
    login: string;
    email: string;
    password: string;
    phone: string;
}

export type UserType = {
    id: number;
    first_name: string;
    second_name: string;
    display_name: string;
    login: string;
    email: string;
    phone: string;
    avatar: string;
}

export class AuthAPI extends BaseAPI {
    constructor() {
        super('/auth');
    }

    signin(data: SigninType) {
        return this.http.post('/signin', data);
    }

    signup(data: SignupType) {
        return this.http.post('/signup', data);
    }

    read(): Promise<UserType> {
        return this.http.get('/user');
    }

    logout() {
        return this.http.post('/logout');
    }

    create = undefined;
    update = undefined;
    delete = undefined;
}

export default new AuthAPI();
