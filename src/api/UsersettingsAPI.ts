import BaseAPI from './BaseAPI';

export type ChangeDataType = {
    first_name: string;
    second_name: string;
    display_name: string;
    login: string;
    email: string;
    phone: string;
}

export type ChangePasswordType = {
    oldPassword: string;
    newPassword: string;
}

export type SearchUserType = {
    login: string;
}

export class UsersettingsAPI extends BaseAPI {
    constructor() {
        super('/user');
    }

    changeData(data: ChangeDataType) {
        return this.http.put('/profile', data);
    }

    changeAvatar(data) {
        return this.http.put('/profile/avatar', data);
    }

    changePassword(data: ChangePasswordType) {
        return this.http.put('/password', data);
    }

    searchUser(data: SearchUserType) {
        return this.http.post('/search', data);
    }

    create = undefined;
    update = undefined;
    delete = undefined;
    read = undefined;
}

export default new UsersettingsAPI();
