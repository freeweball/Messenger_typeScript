import Block from '../../utils/Block';
import template from './template.hbs';
import './style.less';

export interface SearchProps {

}

export class Search extends Block {
    constructor(props: SearchProps) {
        super(props);
    }

    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
