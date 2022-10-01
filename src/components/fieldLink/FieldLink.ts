import "./style.less";
import Block from "../../utils/Block";
import template from "./template.hbs";

export interface FieldLinkProps {
    link: string;
    classModif?: string;
    text: string;
    events?: {
        click: (evt: Event) => void;
    };
}

export class FieldLink extends Block {
    constructor(props: FieldLinkProps) {
        super(props);
    }

    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
