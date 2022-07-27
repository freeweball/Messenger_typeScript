import Handlebars from "handlebars";
import tpl from "./tpl.hbs";
import "./style.less";

Handlebars.registerPartial('avatar', tpl);

export default (props = {}) => tpl(props);