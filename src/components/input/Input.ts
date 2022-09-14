import Block from '../../utils/Block';
import template from './template.hbs';
import './style.less';

export interface InputProps {
    classWrapper: 'input' | 'text';
    type: string;
    name: string;
    labelValue: string;
    classes?: Array<string>;
    placeholder?: string;
    errorValue?: string;
    disabled?: boolean;
    validate?: boolean;
    events?: {
        focusin?: () => void;
        focusout?: () => void;
    }
}

export class Input extends Block {
    constructor(props: InputProps) {
        super(props);
    }

    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
