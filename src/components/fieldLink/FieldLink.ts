import Block from "../../utils/Block";
import template from "./template.hbs";
import "./style.less";

export interface FieldLinkProps {
    link: string;
    classModif?: string;
    text: string;
}

export class FieldLink extends Block {
    constructor(props: FieldLinkProps) {
        super(props);
    }

    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
