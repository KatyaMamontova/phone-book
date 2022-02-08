const express = require('express');
const app = express();
const { NAME, PORT } = require('./public/config.js');

let i = 0;
app.get('/bla/:man/:woman', (req, res) => {//http://localhost:3000/bla/petya/mila
    const { man, woman } = req.params;//присваеваем переменным имена которые впишем в гетовое строке
    res.send('ok');
});

const phones = [
    {
        name: 'Scarlet',
        phone: 354545443
    },
    {
        name: 'Grandma',
        phone: 354545443
    },
    {
        name: 'Santa',
        phone: 354545443
    },
    {
        name: 'Michael',
        phone: 354545443
    },
    {
        name: 'guy',
        phone: 354545443
    },
    {
        name: 'Jesus',
        phone: 354545443
    },
    {
        name: 'plumber',
        phone: 354545443
    },
];

app.get('/phoneBook', (req, res) => {
    //for (let i = 0; i < phones.length; i++)
    res.send( phones[0].name
        
        /* phones.forEach(elem => {
        elem.name;
    }) */
    );
});



app.get('/phone/validate/:number', (req, res) => {
    const number = req.params.number.toString();
    if ((number.length == 11 && number.substr(0, 2) == '89')
        || ((number.length == 12) && number.substr(0, 3) == '+79')) {
        res.send('VALID');
    } else {
        res.send('invalid')
    }
});

app.get('/bla', (req, res) => {//это запрос с названием bla гетовый 
    console.log(req.query);
    res.send('ok');
});

app.get('/*', (req, res) => {// /* будет отвечать на все запросы 
    i++;
    res.send(`ля ля ля ${i}`);
});

app.listen(3000, () => console.log('все ок, работаем'));