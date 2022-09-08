import Block from '../../utils/Block';
import template from './template.hbs';
import './style.less';

export interface IndexProps {
    title: string;
}

export class Index extends Block {
    constructor(props: IndexProps) {
        super(props);
    }

    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
