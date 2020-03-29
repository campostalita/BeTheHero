const express = require('express');
const cors = require('cors')
const routes = require('./routes');

const app = express();

app.use(cors()); // depois mais pra frente coloca o site que entrará
app.use(express.json());//ele vai até o Insomnia e converte o arquivo em json
app.use(routes);


app.listen(3333); //porta que será usada