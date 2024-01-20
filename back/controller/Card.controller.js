const { cardModel } = require("../model/Card.model")


const cardController={
    getAll:async(req,res)=>{
        try{
            const item=await cardModel.find()
            res.status(200).send(item)
        }catch(error){
            res.status(404).send('An occures while getting items')
        }
    },

    getById:async(req,res)=>{
        try{
            const {id}=req.params
            const target=await cardModel.findById(id)
            res.status(200).send(target)

        }catch(error){
            res.status(404).send('An occures while getting by ID item')
        }
    }, 
    add:async(req,res)=>{
        try{
            const {name,price,desc,img}=req.body
            const newItem=new cardModel({name,price,img,desc})
            await newItem.save()
            res.status(200).send(newItem)
        }catch(error){
            res.status(404).send("An occures while adding new item")
        }
    }, 
    delete:async(req,res)=>{
try{
    const {id}=req.params
    await cardModel.findByIdAndDelete(id)
    res.send("item deleted!")
}catch(error){
    res.send("An occures while deleting item")
}
    }
}

module.exports={cardController}