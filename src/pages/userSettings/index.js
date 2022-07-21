import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './style.less';

Handlebars.registerPartial('pageUserSettings', tpl);

export default (title) => {
    return tpl({title})
}