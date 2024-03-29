import './style.less';
import Block from '../../utils/Block';
import template from './template.hbs';

export interface ChatProps {
    id: number;
    chatImage?: string;
    chatAlt?: string;
    dialogTitle: string;
    dialogSubText?: string;
    dialogText: string;
    infoTime: string;
    infoCountIcon: number;
    events?: {
        click: (evt: Event) => void;
    };
}

export class Chat extends Block {
    constructor(props: ChatProps) {
        super(props);
    }

    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
