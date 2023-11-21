const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const companySchema = new Schema({
    name:{
        type:String,
        required:true
    },
    short_des:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    logo_url:{
        type:String,
        required:false
    },
    location:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    created_by:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('Company', companySchema);