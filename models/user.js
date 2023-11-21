const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    is_admin:{
        type:Boolean,
        required:true
    },
    created_jobs:[{
        type: Schema.Types.ObjectId,
        ref: 'Job'
    }]
})

module.exports = mongoose.model('User', userSchema);