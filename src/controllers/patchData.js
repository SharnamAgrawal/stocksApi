const Stock = require('../schema/stocksSchemma')
const mongoose = require('mongoose');
const patchData = async (req,res)=>{
const {_id} = req.params;
const obj = req.body;
try{
    if(!mongoose.Types.ObjectId.isValid(_id)){
        throw new Error('Invalid Id')
    }
    const s = await Stock.findByIdAndUpdate(_id,{$set : obj},{new : true})
    res.status(200).json(s);
}catch(e){
    res.status(400).json({message : e.message});
}
}
module.exports = patchData