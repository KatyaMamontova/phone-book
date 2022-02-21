class PhoneBook {
    constructor(contacts) {
        this.contacts = contacts;
    }

    addNumber(name, number) {
        this.contacts.push({
            name,
            number
        });
    }

    deleteNumber(prop, propName = 'name') {
        let flag = false;
        this.contacts.forEach((elem, i, arr) => {
            if (elem[propName] == prop) {
                arr.splice(i, 1);
                flag = true;
            }
        });
        return flag;
    }

    convertStrToNumber(str) {
        let convertedNumber = '';
        let start = 0;
        if (str.startsWith('+7')) {
            convertedNumber += '8';
            start = 2;
        };
        const allowedSymbols = ['(', ')', '-'];
        for (let i = start; i < str.length; i++) {
            if ((str[i] - 0)
                || str[i] === '0') {
                convertedNumber += str[i];
            } else if (allowedSymbols.indexOf(str[i]) != -1) {
                convertedNumber += '';
            } else return false;
        }

        //этот код допускает ввод номера телефона вообще с любыми символами
        //просто вычленяет цифры из строки
        /*if (str[0] === '+') convertedNumber += '+';
        for (let i = 0; i < str.length; i++) {
            if ((str[i] - 0) || str[i] === '0') convertedNumber += str[i];
        } */

        return convertedNumber;
    }

    validateNumber(number) {
        console.log(number);
        if ((number.length === 11) && (number.startsWith('89')))
            return true;
    }

}
module.exports = PhoneBook;