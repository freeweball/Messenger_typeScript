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

    validate(data) {
        const name = data['first_name'] || data['second_name'];
        const login = data['login'];
        const email = data['email'];
        const password = data['password'];
        const phone = data['phone'];
        const message = data['message'];

        if (name) {
            const firstSymbol = new RegExp('[А-ЯA-Z]');
            console.log(firstSymbol.test(name[0]) + '  Проверка на заглавный первый символ');

            const latinСyrillic = new RegExp('[A-Za-zА-Яа-я]');
            console.log(latinСyrillic.test(name) + '  Проверка на латиница/кирилица');

            const specialSymbols = new RegExp('[!"#$%&\'()*+,.:;<>=?@^_-{|]');
            console.log(specialSymbols.test(name) + '  Проверка на спецсимволы');

            const numbers = new RegExp('[0-9]');
            console.log(numbers.test(name) + '  Проверка на наличие цифр');
        }
        else if (login) {
            const lengthLogin = login.length >= 3 && login.length <= 20;
            console.log(lengthLogin + '  Проверка на длину логина');

            const latin = new RegExp('[A-Za-z]');
            console.log(latin.test(login) + '  Проверка на латиница');

        const specialSymbols = new RegExp('[!"#$%&\'()*+,.:;<>=?@^_-{|]');
            console.log(specialSymbols.test(login) + '  Проверка на спецсимволы');
        }
        else if (password) {

        }
        else if (email) {

        }
        else if (phone) {
            const lengthPhone = phone.length >= 10 && phone.length <= 15;
            console.log(lengthPhone + '  Проверка на длину номера');

            const numbers = new RegExp('^\d+$');
            console.log(numbers.test(phone.slice(1)) + '  Проверка на наличие цифр');

            const firstSymbolPlus = !!(phone[0] === '+');
            console.log(firstSymbolPlus);
        }
        else if (message) {
            const zeroSymbols = !!message;
            console.log(zeroSymbols + '  Проверка на пустую строку')
        }
    }
}
