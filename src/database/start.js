require('dotenv').config();
const connectMondoDb = require('./db1.js');
const Stock = require('../schema/stocksSchemma');
const data = require('../data.json');
const mongoose = require('mongoose');
const st = async ()=>{
    try{
   await connectMondoDb(process.env.MONGODB_URL);
   await Stock.create(data); console.log("data sent");}
   catch(e){
    console.log(e.message);
   }
}
st();