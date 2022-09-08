import Block from '../../utils/Block';
import template from './template.hbs';
import './style.less';

export interface ChatContentProps {
    dummyText: string;
}

export class ChatContent extends Block {
    constructor(props: ChatContentProps) {
        super(props);
    }

    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
