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
                date: '19 июня',
                text: 'Привет! Смотри, тут всплыл интересный кусок лунной космической истории НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну.',
                time: '12:00'

            }),
            message2: new Message({
                classes: ['interlocutor'],
                date: '20 июня',
                text: 'Привет! Смотри, тут всплыл интересный кусок лунной космической истории НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну.',
                time: '15:00'
            })
        }
    }

    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
