import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './style.less';

Handlebars.registerPartial('changeUserData', tpl);

export default (props = {}) => {
    return tpl(props)
}