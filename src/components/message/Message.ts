import './style.less';
import Block from '../../utils/Block';
import template from './template.hbs';

export type MessageType = {
    classes?: Array<string>;
    date?: string;
    content?: string;
    time?: string;
}

export class Message extends Block {
    constructor(props: MessageType) {
        super(props);
    }

    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
