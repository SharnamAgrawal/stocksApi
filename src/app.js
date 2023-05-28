require('dotenv').config();
const express = require('express'); 
const app = express();
const port = process.env.Port || 8000;
const Stock = require('./schema/stocksSchemma');
const connectMongoDb = require('./database/db1.js');
const router = require('./routes/route');
const start = async() =>{
  try{
  await connectMongoDb(process.env.MONGODB_URL)
  console.log('succesfull connection');
  }catch(e){
   console.log(e.message);
  }
}; start();
app.use(express.json());
app.get('/', (req,res)=>{res.send("HEllo")});
app.use('/api/stocks',router);
app.listen(port);