const dotenv = require('dotenv')
dotenv.config();
const express =require('express');
const PORT = process.env.PORT || 6000
const mongoosetoconnect = require('./db')

mongoosetoconnect();

const app = express();


app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));

app.use("/",require('./routes'))


app.listen(PORT, () => console.log('Server is Running on port : http://localhost:6000'))



