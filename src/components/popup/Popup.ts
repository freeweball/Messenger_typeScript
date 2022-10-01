import './style.less';
import Block from '../../utils/Block';
import template from './template.hbs';

export interface PopupProps {
    title: string;
    text: string;
    button: (...args: any) => Block;
}

export class Popup extends Block {
    constructor(props: PopupProps) {
        super(props);
    }

    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
