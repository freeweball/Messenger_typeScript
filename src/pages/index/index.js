import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './style.less';

Handlebars.registerPartial('pageIndex', tpl);

export default (title, ItemPage404, itemPage500, itemPageAuthorization, itemPageUserSettings) => {
    return tpl({title, ItemPage404, itemPage500, itemPageAuthorization, itemPageUserSettings})
}