import Block from "../../utils/Block";
import template from "./template.hbs";
import "./style.less";

export interface InputProps {
    classWrapper: string; //'input' || 'text'
    type: string;
    name: string;
    labelValue: string;
    classes?: string;
    placeholder?: string;
    errorValue?: string;
    disabled?: string;
}

export class Input extends Block {
    constructor(props: InputProps) {
        super('div', props);
    }

    render() {
        return this.compile(template, this.props);
    }
}
