const Stock = require('../schema/stocksSchemma')
const mongoose = require('mongoose')
const postData = async (req,res)=>{
      const {name,sector,peratio,pbratio,shortform,sectorpe,sectorpb,dividend,mcap,sorted} = req.body;
      const addingObject = {name,sector,peratio,pbratio,shortform,sectorpe,sectorpb,dividend,mcap,sorted}
      try{
     const newStock = new Stock(
        addingObject
     )
     const re = await newStock.save();
     res.status(200).json(re);
      }catch(e){
        res.status(400).json({message : e.message})
      }
}
module.exports = postData