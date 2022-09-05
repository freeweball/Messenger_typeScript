import Block from '../../utils/Block';
import template from './template.hbs';
import './style.less';

export interface ButtonProps {
    id: string;
    value: string;
    classes?: string;
    type: string;
    events?: {
        click: () => void;
    };
}

export class Button extends Block {
    constructor(props: ButtonProps) {
        super('div', props);
    }

    render() {
        return this.compile(template, this.props);
    }
}
