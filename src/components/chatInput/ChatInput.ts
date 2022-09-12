import Block from '../../utils/Block';
import template from './template.hbs';
import './style.less';
import {Button} from '../button/Button';
import {Search} from '../search/Search';
import {DropDown} from '../dropDown/DropDown';

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
                        this.setProps(this.children.dropDown.element?.classList.toggle('show'));
                    }            
                }
            }),
            inputMessage: new Search({}),
            buttonSend: new Button({
                id: this.id,
                classes: ['button-arrow--rotate'],
                type: 'button',
            })
        }
    }

    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
