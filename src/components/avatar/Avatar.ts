import Block from "../../utils/Block";
import template from "./template.hbs";
import "./style.less";

export interface AvatarProps {
    url: string;
    alt: string;
    text?: string;
    title?: string;
    events?: {
        click: () => void;
    };
}

export class Avatar extends Block {
    constructor(props: AvatarProps) {
        super(props);
    }

    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
