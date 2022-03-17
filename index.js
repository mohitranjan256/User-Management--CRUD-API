const dotenv = require('dotenv')
dotenv.config()
const express =require('express');

const mongoosetoconnect = require('./db')

mongoosetoconnect();

const app = express();
const PORT = 6000;

app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));

app.use("/",require('./routes'))


app.listen(PORT, () => console.log('Server is Running on port : http://localhost:6000'))



