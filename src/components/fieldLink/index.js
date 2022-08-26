import Handlebars from "handlebars";
import tpl from "./tpl.hbs";
import "./style.less";

Handlebars.registerPartial('fieldLink', tpl);

export default (link, text, classModif) => tpl({link, text, classModif});