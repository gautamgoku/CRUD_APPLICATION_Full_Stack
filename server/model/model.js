
const mongoose = require('mongoose');

var schema = new mongoose.Schema({

    book:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        required:true,
    },
    edition :{
        type:String,
        required:true,
    },
    subject :{
        type:String,
        required:true,
    },
    Status :{
        type:String,
        required:true,
    },
    

})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;