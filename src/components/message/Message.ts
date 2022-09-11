import Block from '../../utils/Block';
import template from './template.hbs';
import './style.less';

export interface MessageProps {
    classes: string;
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
