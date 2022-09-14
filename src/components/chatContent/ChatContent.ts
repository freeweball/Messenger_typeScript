import Block from '../../utils/Block';
import template from './template.hbs';
import './style.less';
import {Message} from '../message/Message';

export interface ChatContentProps {
    dummyText: string;
}

export class ChatContent extends Block {
    constructor(props: ChatContentProps) {
        super(props);
    }

    public init(): void {
        this.children = {
            message1: new Message({
                date: new Date().toLocaleString('ru', {day: 'numeric', month: 'long'}),
                text: 'Привет! Смотри, тут всплыл интересный кусок лунной космической истории НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну.',
                time: new Date().toLocaleString('ru', {hour: 'numeric', minute: 'numeric',})

            }),
            message2: new Message({
                classes: ['interlocutor'],
                date: new Date().toLocaleString('ru', {day: 'numeric', month: 'long'}),
                text: 'Привет! Смотри, тут всплыл интересный кусок лунной космической истории НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну.',
                time: new Date().toLocaleString('ru', {hour: 'numeric', minute: 'numeric',})
            }),
        }
    }

    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
