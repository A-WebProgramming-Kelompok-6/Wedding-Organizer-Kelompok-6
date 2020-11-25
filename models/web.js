const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const webSchema = new Schema({
    name: {
        type : String,
        required : true
    },
    coupleName: {
        type : String,
        required : true
    },
    email: {
        type : String,
        required : true

    },
    date: {
        type : Date,
        required : true
    }
    },);

const Web = mongoose.model('Web', webSchema);
module.exports = Web;


