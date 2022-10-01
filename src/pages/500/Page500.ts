import './style.less';
import Block from '../../utils/Block';
import template from './template.hbs';
import {Button} from '../../components/button/Button';

export class Page500 extends Block {
    public init(): void {
        this.children = {
            buttonBack: new Button({
                id: this.id,
                value: 'Назад к чатам',
                type: 'button',
                classes: ['button--white'],
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
