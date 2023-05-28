const Stock = require('../schema/stocksSchemma');
const mongoose = require('mongoose');
const getMeData = async (req,res)=>{
    let {name,sector,peratio,pbratio,shortform,sectorpe,sectorpb,dividend,mcap,sorted} = req.query;
    let queryObject = {}
    if(name){
        queryObject.name = name;
    }
    if(sector){
        queryObject.sector = sector;
    }
    if(peratio){
        queryObject.peratio = peratio;
    }
    if(pbratio){
        queryObject.pbratio = pbratio;
    }
    if(shortform){
        queryObject.shortform = shortform;
    }
    if(sectorpe){
        queryObject.sectorpe = sectorpe;
    }
    if(sectorpb){
        queryObject.sectorpb = sectorpb;
    }
    if(dividend){
        queryObject.dividend = dividend;
    }
    if(mcap){
        queryObject.mcap = mcap;
    }
    let ans = Stock.find(queryObject,{_id : -1});
    if(sorted){
        sorted = sorted.replace(","," ");
        ans = ans.sort(sorted);
    }
    let mydata = await ans;
    res.status(200).json(mydata);

}
module.exports = getMeData;