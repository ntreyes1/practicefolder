const express = require('express');

const bodyParser = require('body-parser');

const mysql = require('mysql2');

const app = express();

app.use(bodyParser.urlencoded({ extended : true}));

const connection = mysql.createConnection({
    host : 'u6354r3es4optspf.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user : 'x7vvsgcy5o49sq0l',
    password : 'pwjpg34y3t7dbox5',
    database : 'gdxrv40koc8k9tio',
});

connection.connect((error) => {
    if(error){
        console.log('Error connecting to MySQL:' , error);
        return;
    }
    console.log('Connected to MySQL database');
});

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/client/index.html');
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});