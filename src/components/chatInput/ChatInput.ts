import './style.less';
import Block from '../../utils/Block';
import template from './template.hbs';
import {Button} from '../button/Button';
import {Search} from '../search/Search';
import {DropDown} from '../dropDown/DropDown';
import store from '../../utils/Store';

export interface ChatInputProps {

}

export class ChatInput extends Block {
    constructor(props: ChatInputProps) {
        super(props);
    }

    public init(): void {
        this.children = {
            dropDown: new DropDown({
                photo: 'Фото или видео',
                file: 'Файл',
                location: 'Локация'
            }),
            buttonAddFile: new Button({
                id: this.id,
                classes: ['button-add-file'],
                type: 'button',
                events: {
                    click: () => {
                        this.children.dropDown.element?.classList.toggle('show');
                    }            
                }
            }),
            inputMessage: new Search({}),
            buttonSend: new Button({
                id: this.id,
                classes: ['button-arrow--rotate'],
                type: 'button',
                events: {
                    click: () => {
                        const input = this.children.inputMessage.element.querySelector('input');
                        
                        store.set('message', {content: input.value});
                    }
                }
            })
        }
    }

    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
