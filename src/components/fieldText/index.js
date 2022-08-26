import Handlebars from "handlebars";
import tpl from "./tpl.hbs";
import "./style.less";

Handlebars.registerPartial('fieldText', tpl);

export default (key, value, type, name) => tpl({key,value, type, name});