import Block from '../../utils/Block';
import template from './template.hbs';
import './style.less';
import {Button} from '../../components/button/Button';

export interface Page404Props {
    title: string;
    text: string;
}

export class Page404 extends Block {
    constructor(props: Page404Props) {
        super(props);
    }

    public init(): void {
        this.children = {
            buttonBack: new Button({
                id: this.id,
                value: 'Назад к чатам',
                type: 'button',
                classes: 'button--white',
                events: {
                    click: () => location.reload()
                }
            })
        }
    }

    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
