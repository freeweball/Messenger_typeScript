import Handlebars from 'handlebars';
//import Handlebars from 'handlebars/dist/handlebars.runtime';
import tpl from './tpl.hbs';
import './style.less';

Handlebars.registerPartial('button', tpl);

export default (id, value, classes) => {
	return tpl({ id, value, classes });
}
