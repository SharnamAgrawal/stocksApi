const Stock = require('../schema/stocksSchemma')
const mongoose = require('mongoose')
const deleteData = async (req,res)=>{
    const {_id} = req.params;
    try{
        if(!mongoose.Types.ObjectId.isValid(_id)){
            throw new Error('Invalid Id')
        }
        const s = await Stock.findByIdAndDelete(_id);
        res.status(200).json(s);
    }catch(e){
      res.status(400).json({message : e.message});
    }
}
module.exports = deleteData