import Handlebars from "handlebars";
import tpl from "./tpl.hbs";
import "./style.less";

Handlebars.registerPartial('input', tpl);

export default (type, name, classes, placeholder, labelValue, errorValue, disabled) => tpl({type, name, classes, placeholder, labelValue, errorValue, disabled});