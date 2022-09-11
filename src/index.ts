//pages
import {Index} from './pages/index/PageIndex';
import {Page404} from './pages/404/Page404';
import {Page500} from './pages/500/Page500';
import {PageAuthorization} from './pages/authorization/PageAuthorization';
import {PageRegistration} from './pages/registration/PageRegistration';
import {PageUserSettings} from './pages/userSettings/PageUserSettings';
import {PageChangeUserData} from './pages/changeUserData/PageChangeUserData';
import {PageChangeUserPassword} from './pages/changeUserPassword/PageChangeUserPassword';
import {PageChat} from './pages/chat/PageChat';

//styles
import './style/style.less';
import { ChatList } from './components/chatList/ChatList';

const configurations = {
    'index': new Index({
        title: 'Навигация по страницам'
    }),
    'link-1': new Page404({
        title: '404',
        text: 'Не туда попали',
    }),
	'link-2': new Page500({
        title: '500',
        text: 'Мы уже фиксим',
    }),
	'link-3': new PageAuthorization({
		title: 'Вход',
	}),
	'link-4': new PageRegistration({
		title: 'Регистрация',
	}),
	'link-5': new PageUserSettings({
		title: 'Страница настройки пользователя',
	}),
    'link-6': new PageChat({
        title: 'Чат',
    }),
	'userSettings-1': new PageChangeUserData({}),
	'userSettings-2': new PageChangeUserPassword({}),
	'userSettings-3': new Page404({
        title: '404',
        text: 'Не туда попали',
        textAction: 'Назад к чатам'
    }),
};

const renderApp = (key) => {
	const app = document.getElementById('app');
    const page = configurations[key].getContent();
    // const page = configurations[key];

	document.getElementById('app').innerHTML = '';
	app.appendChild(page);
}

window.onload = () => {
	renderApp('index');

	const linksPages = document.querySelectorAll('.pages__item');

	if (linksPages) {
		linksPages.forEach(link => link.addEventListener('click', evt => {
			evt.preventDefault();
			renderApp(evt.target.classList[1]);

			const userSettingsLinks = document.querySelectorAll('.fieldLink__link');

			userSettingsLinks.forEach(link => link.addEventListener('click', evt => {
				evt.preventDefault();
				renderApp(evt.target.classList[1]);
			}))
		}));
	}
};
