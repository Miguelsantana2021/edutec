const express = require ('express');
const mysql = require ('mysql2');
const bodyParser = require ('body-parser');
const cors = require ('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json())

app.use(cors());

const connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'root',
    database:'edutec',
});

connection.connect((err)=>{
    if(err){
        console.log("Não consegui me conectar ao mysql" + err.stack)
    }
    console.log("Consegui me conectar ao Mysql")

});

