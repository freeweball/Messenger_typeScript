export class Socket {
    private _socket;

    constructor(userId: number, chatId: number, token: string) {
        this._socket = new WebSocket(`wss://ya-praktikum.tech/ws/chats/${userId}/${chatId}/${token}`);
    }
    
    send(message: any) {
        this._socket.addEventListener('open', () => {    
            this._socket.send(JSON.stringify(message));
        });
    }

    close() {
        this._socket.close();
    }

    getMessage() {
        this._socket.addEventListener('message', event => {
            return event.data;
        });
    }
}

