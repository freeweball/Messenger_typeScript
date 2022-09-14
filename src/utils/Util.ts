import Block from "./Block";

export class Util {
    public getInputValues(...args: Array<Block>): {string: string} | {} {
        const data = {};
    
        for (const arg of args) {
            const element = arg.element?.querySelector('input');

            if (element) {
                data[element.name] = element.value;
            }
        }

        return data;
    }

    public toggleClassName(child: Block, className: string): void {
        if (!this.validate(this.getInputValues(child))) {
            child.element?.classList.add(className);
        } else {
            child.element?.classList.remove(className);
        }
    }

    public removeClassName(child: Block, className: string): void {
        child.element?.classList.remove(className);
    }

    public validate(data): boolean {
        const name = data['first_name'] || data['second_name'];
        const login = data['login'];
        const email = data['email'];
        const password = data['password'];
        const phone = data['phone'];
        const message = data['message'];

        if (name) {
            return [
                /[А-ЯA-Z]/.test(name[0]),
                name.match(/[A-Za-zА-Яа-я]/g)?.length === name.length,
                !/\s/i.test(name),
                !/[0-9]/.test(name),
                !/[!@#$%^&*()"'+,.:;<>=?_{}|[\]]/.test(name)
            ].every((value: boolean) => value === true);
        }
        else if (login) {
            return [
                login.length >= 3 && login.length <= 20,
                login.match(/[A-Za-z0-9]/g)?.length === login?.length,
                login.match(/[0-9]/g)?.length !== login.length,
                !/\s/i.test(login),
                !/[!@#$%^&*()"'+,.:;<>=?{}|[\]]/.test(login)
            ].every((value: boolean) => value === true);
        }
        else if (password) {
            return [
                password.length >= 8 && password.length <= 40,
                /[A-Za-aА-Яа-я]/g.test(password),
                /[0-9]/g.test(password),
            ].every((value: boolean) => value === true);
        }
        else if (email) {
            return [
                email.match(/[A-Za-z0-9]/g)?.length === email?.length,
                /^[a-zA-Z0-9._-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,6}$/.test(email)
            ].every((value: boolean) => value === true);
        }
        else if (phone) {
            return [
                phone.length >= 10 && phone.length <= 15,
                !!(phone[0] === '+' || /[0-9]/.test(phone[0])),
                phone.match(/[0-9]/g)?.length === phone.length,
            ].every((value: boolean) => value === true);
        }
        else if (message) {
            return [
                !!message
            ].every((value: boolean) => value === true);
        } else {
            return false;
        }
    }
}
