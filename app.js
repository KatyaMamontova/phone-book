const express = require('express');
const app = express();
const port = 3000;
var server = require('http').Server(app);
//const { NAME, PORT } = require('config.js');
app.use(express.static(__dirname + '/public'));
server.listen(port, () => console.log('it\'s aLIvEEEEEE'));

/* app.get('/bla/:man/:woman', (req, res) => {//http://localhost:3000/bla/petya/mila
    const { man, woman } = req.params;//присваеваем переменным имена которые впишем в гетовое строке
    res.send('ok');
}); */

const phones = [
    {
        name: 'Scarlet',
        phone: '89128762312'
    },
    {
        name: 'Grandma',
        phone: '89227663510'
    },
    {
        name: 'Santa',
        phone: '89070064147'
    },
    {
        name: 'Michael Scarn',
        phone: '87179001234'
    },
    {
        name: 'guy',
        phone: '89198002143'
    },
    {
        name: 'Jesus',
        phone: '89102533123'
    },
    {
        name: 'plumber',
        phone: '89122583100'
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

//app.listen(port, () => console.log('все ок, работаем'));