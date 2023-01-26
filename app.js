require('dotenv').config();
const express = require('express');

const router = require('./routers/router');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(router);

app.listen(process.env.PORT, _ => {
    console.log('Run');
});
