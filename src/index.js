import tpl from './index.hbs';
import './style/style.less';
import button from './components/button';
import pageIndex from './pages/index';
import page404 from './pages/404';
import page500 from './pages/500';
import pageAuthorization from './pages/authorization';
import pageUserSettings from './pages/userSettings';
import input from './components/input';
import formAuthorization from './components/formAuthorization';
import popup from './components/popup';
import pageRegistration from './pages/registration';
import formRegistration from './components/formRegistration';
import avatar from './components/avatar';
import fieldText from './components/fieldText';
import fieldLink from './components/fieldLink';
import changeUserData from './pages/changeUserData';
import changeUserPassword from './pages/changeUserPassword';

const configurations = {
	'index': pageIndex('Навигация по страницам'),
	'link-1': page404('404'),
	'link-2': page500('500'),
	'link-3': pageAuthorization({
		formAuthorization: true,
		title: 'Вход',
	}),
	'link-4': pageRegistration({
		title: 'Регистрация',
		formRegistration: true,
	}),
	'link-5': pageUserSettings({
		title: 'Страница настройки пользователя',
		
	}),
	'userSettings-1': changeUserData(),
	'userSettings-2': changeUserPassword(),
	'userSettings-3': page404(),
};

const renderApp = (key) => {
	const app = document.getElementById('app');
	const template = document.createElement('template');

	document.getElementById('app').innerHTML = '';
	template.innerHTML = configurations[key];
	app.appendChild(template.content);
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
