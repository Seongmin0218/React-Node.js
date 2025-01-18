const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id': '1',
            'image': 'https://placeimg.com/64/64/any',
            'name': '홍길동',
            'birthday': 20020218,
            'gender': 'male',
        },
        {
            'id': '2',
            'image': 'https://placeimg.com/64/64/any',
            'name': '김철수',
            'birthday': 20030916,
            'gender': 'male',
        },
        {
            'id': '3',
            'image': 'https://placeimg.com/64/64/any',
            'name': '김영희',
            'birthday': 20030513,
            'gender': 'female',
        }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`))