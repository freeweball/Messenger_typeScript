import {Page404} from './pages/404/Page404';
import {Page500} from './pages/500/Page500';
import {PageAuthorization} from './pages/authorization/PageAuthorization';
import {PageRegistration} from './pages/registration/PageRegistration';
import {PageUserSettings} from './pages/userSettings/PageUserSettings';
import {PageChangeUserData} from './pages/changeUserData/PageChangeUserData';
import {PageChangeUserPassword} from './pages/changeUserPassword/PageChangeUserPassword';
import {PageChat} from './pages/chat/PageChat';
import AuthController from './controllers/AuthController';

import './style/style.less';
import Router from './utils/Router';

export enum Routes {
    Page404 = '/404',
    Page500 = '/500',
    PageAuthorization = '/',
    PageRegistration = '/sign-up',
    PageUserSettings = '/settings',
    PageChat = '/messenger',
    PageChangeUserData = '/changeUserData',
    PageChangeUserPassword = '/changeUserPassword'
}

window.addEventListener('DOMContentLoaded', async () => {
    Router
        .use(Routes.Page404, Page404)
        .use(Routes.Page500, Page500)
        .use(Routes.PageAuthorization, PageAuthorization)
        .use(Routes.PageRegistration, PageRegistration)
        .use(Routes.PageUserSettings, PageUserSettings)
        .use(Routes.PageChat, PageChat)
        .use(Routes.PageChangeUserData, PageChangeUserData)
        .use(Routes.PageChangeUserPassword, PageChangeUserPassword)

        let isProtectedRoute = true;

        switch (window.location.pathname) {
            case Routes.Page404:
            case Routes.Page500:
            case Routes.PageUserSettings:
            case Routes.PageChat:
            case Routes.PageChangeUserData:
            case Routes.PageChangeUserPassword:
            case Routes.PageAuthorization:
            case Routes.PageRegistration:
                isProtectedRoute = false;
                break;
        }
      
        try {
          await AuthController.saveUser();
      
          Router.start();
      
          if (!isProtectedRoute) {
            Router.go(Routes.PageUserSettings)
          }
        } catch (e) {
          Router.start();
      
          if (isProtectedRoute) {
            Router.go(Routes.PageAuthorization);
          }
        }
});
