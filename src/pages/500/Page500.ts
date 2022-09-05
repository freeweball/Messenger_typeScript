import Block from '../../utils/Block';
import template from './template.hbs';
import './style.less';
import {Button} from '../../components/button/Button';

export interface Page500Props {
    title: string;
    text: string;
}

export class Page500 extends Block {
    constructor(props: Page500Props) {
        super('div', props);
    }

    init() {
        this.children.buttonBack = new Button({
            id: this.id,
            value: 'Назад к чатам',
            type: 'button',
            classes: 'button--white',
            events: {
                click: () => location.reload()
            }
        });
    }

    render() {
        return this.compile(template, this.props);
    }
}
