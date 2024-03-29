import './style.less';
import Block from '../../utils/Block';
import template from './template.hbs';

export interface SearchProps {
    id: string;
    placeholder?: string;
    name: string;
}

export class Search extends Block {
    constructor(props: SearchProps) {
        super(props);
    }

    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
