import './style.less';
import Block from '../../utils/Block';
import template from './template.hbs';

export interface MessageProps {
    classes?: Array<string>;
    date?: string;
    text?: string;
    time?: string;
}

export class Message extends Block {
    constructor(props: MessageProps) {
        super(props);
    }

    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
