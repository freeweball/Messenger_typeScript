import Block from "../../utils/Block";
import template from "./template.hbs";
import "./style.less";

export interface AvatarProps {
    url: string;
    alt: string;
    text?: string;
    title?: string;
}

export class Avatar extends Block {
    constructor(props: AvatarProps) {
        super('div', props);
    }

    render() {
        return this.compile(template, this.props);
    }
}
