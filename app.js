const express = require('express');
const { NAME, PORT } = require('./config.js');
const PhoneBook = require('./phoneBook.js');
const app = express();
app.use(express.static('public'));

const contacts = [
    {
        name: 'Scarlet',
        number: '89128762312'
    },
    {
        name: 'Grandma',
        number: '89227663510'
    },
    {
        name: 'Santa',
        number: '89070064147'
    },
    {
        name: 'Michael Scarn',
        number: '87179001234'
    },
    {
        name: 'guy',
        number: '89198002143'
    },
    {
        name: 'Jesus',
        number: '89102533123'
    },
    {
        name: 'plumber',
        number: '89122583100'
    },
];

const phoneBook = new PhoneBook(contacts);

app.get('/phoneBook', (req, res) => {
    res.send({ contacts });
});

app.get('/phoneBook/addNumber/:name/:number', (req, res) => {
    let name = req.params.name;
    let number = req.params.number;
    let convertedNumber = phoneBook.convertStrToNumber(number);
    if (convertedNumber && name != '') {
        if (phoneBook.validateNumber(convertedNumber)) {
            phoneBook.addNumber(name, convertedNumber);
            res.send({ answer: `Создан новый контакт: ${name}, ${number}` });
        } else res.send({ error: 'invalid number' });
    } else res.send({ error: 'incorrect input' });
});

app.get('/phoneBook/deleteNumber/:prop', (req, res) => {
    let prop = req.params.prop;
    convertedNumber = phoneBook.convertStrToNumber(prop);
    if (convertedNumber) {
        if (phoneBook.deleteNumber(prop, 'number')) {
            res.send({ answer: 'Контакт удален' });
        }
    } else if (phoneBook.deleteNumber(prop, 'name')) {
        res.send({ answer: 'Контакт удален' });
    } else res.send({ error: 'Контакт не найден' });
});

app.get('/phoneBook/validate/:number', (req, res) => {
    let number = req.params.number;
    let convertedNumber = phoneBook.convertStrToNumber(number);
    console.log(convertedNumber);
    if (convertedNumber) {
        if (phoneBook.validateNumber(convertedNumber)) {
            res.send({ answer: 'valid' });
        } else res.send({ answer: 'invalid' });
    } else res.send({ error: 'incorrect input' });
});

app.listen(PORT, () => console.log('все ок, работаем'));