import Block from '../../utils/Block';
import template from './template.hbs';
import './style.less';

export interface ButtonProps {
    id: string;
    value?: string;
    classes?: string;
    type: string;
    events?: {
        click: (evt: Event) => void;
    };
}

export class Button extends Block {
    constructor(props: ButtonProps) {
        super(props);
    }

    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
