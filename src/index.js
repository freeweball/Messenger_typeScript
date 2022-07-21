import tpl from './index.hbs';
import './style/style.less';
import button from './components/button';
import pageIndex from './pages/index';
import page404 from './pages/404';
import page500 from './pages/500';
import pageAuthorization from './pages/authorization';
import pageUserSettings from './pages/userSettings';
import loginForm from './components/loginForm';

const configurations = {
	'index': {
		pageIndex: 'Навигация по страницам',
		ItemPage404: 'Страница 404',
		itemPage500: 'Страница 500',
		itemPageAuthorization: 'Страница авторизация',
		itemPageUserSettings: 'Страница настройки пользователя',
	},
	'link-1': page404('404'),
	'link-2': page500('500'),
	'link-3': pageAuthorization({
		title: 'Вход',
		btn: button('authprize', 'Авторизоваться'),
		btn2: button('authprizeEmpty', 'Нет аккаунта?')
	}),
	'link-4': pageUserSettings('Страница настройки пользователя')
};

window.onload = () => {
	document.getElementById('app').innerHTML = tpl(configurations['index']);

	const links = document.querySelectorAll('.pages__item');

	for (const link of links) {
		link.addEventListener('click', (evt) => {
			const current = evt.target.classList[1];

			const template = document.createElement('template');
			template.innerHTML = configurations[current];
			document.getElementById('app').innerHTML = '';
			document.getElementById('app').appendChild(template.content)
		})
	}
};
