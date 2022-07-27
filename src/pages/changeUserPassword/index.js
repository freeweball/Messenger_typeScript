import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './style.less';

Handlebars.registerPartial('changeUserPassword', tpl);

export default (props = {}) => {
    return tpl(props)
}