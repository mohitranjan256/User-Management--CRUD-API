const { Timestamp } = require('mongodb')
const mongoose = require('mongoose')
// const { required } = require('nodemon/lib/config')
const schema = mongoose.Schema

const userschema = new schema ({

    username :{
        type : String,
        required: true,
        unique: true
        
    },
    Name :{
        type :String,
        required: true
    },
    password : {
        type : String,
        required: true
    },
    phoneno :{
        type: Number,
        required: true
    }
    
},{Timestamp : true})

const User_Database = mongoose.model('User_Database',userschema)
module.exports = User_Database
