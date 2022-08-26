import Handlebars from "handlebars";
import tpl from "./tpl.hbs";
import "./style.less";

Handlebars.registerPartial('formAuthorization', tpl);

export default (props = {}) => tpl(props);