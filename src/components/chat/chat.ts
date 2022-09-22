import Block from '../../utils/Block';
import template from './template.hbs';
import './style.less';

export interface ChatProps {
    chatImage?: string;
    chatAlt?: string;
    dialogTitle: string;
    dialogSubText: string;
    dialogText: string;
    infoTime: string;
    infoCountIcon: number;
}

export class Chat extends Block {
    constructor(props: ChatProps) {
        super(props);
    }

    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
