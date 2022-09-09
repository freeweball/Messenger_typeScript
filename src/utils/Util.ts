import Block from "./Block";

export class Util {
    getInputValues(...args: Array<Block>) {
        const data = {};
    
        for (const arg of args) {
            const element = arg.element?.querySelector('input');

            if (element) {
                data[element.name] = element.value;
            }
        }

        return data;
    }
}
