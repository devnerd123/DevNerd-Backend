const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const jobSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    salary:{
        type:String,
        required:false
    },
    description:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    created_by:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
},{timestamps:true}
)

module.exports = mongoose.model('Job', jobSchema);