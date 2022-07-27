import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './style.less';

Handlebars.registerPartial('pageRegistration', tpl);

export default (props = {}) => {
	return tpl(props);
}