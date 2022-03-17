const { Timestamp } = require('mongodb')
const mongoose = require('mongoose')

const schema = mongoose.Schema

const userschema = new schema ({

    username :{
        type : String,
        required: true
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

const user = mongoose.model('User',userschema)
module.exports = user
