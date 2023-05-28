const mongoose = require('mongoose');
const validator = require('validator');
const stocksSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    sector : {
        type : String,
        required : true,
    },
    peratio : {
        type : Number,
        required : true
    },
    pbratio : {
        type : Number,
        required : true
    },
    shortform : {
        type : String,
        required : true
    },
    sectorpe : {
        type:Number,
        required : true
    },
    sectorpb : {
        type : Number,
        required : true
    },
    dividend : {
        type : Number,
        required : true
    },
    mcap : {
        type : String,
        required : true
    }
})
const Stock = new mongoose.model("Stock",stocksSchema);
module.exports = Stock;