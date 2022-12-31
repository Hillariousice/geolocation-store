const Store = require('../model/Store')

exports.getStores = async(req,res,next)=>{
try{
    const stores = await Store.find()
    return res.status(200).json({
        success:true,
        count:stores.length,
        data:stores
    })
}catch(err){
    console.error(err)
    res.status(500).json({error:'Server error'})
}  

}
exports.addStores = async(req,res)=>{
    try{
        const {storeId,address} =req.body
      const store = await Store.create({
        storeId, address
      })
      return res.status(200).json({
        message: "Store added successfully",
        success:true,
        data:store

      })
    }catch(err){
        console.error(err)
        if(err.code === 11000){
            return res.status(400).json({error:'This store already exists '})
        }
        res.status(500).json({error:'Server error'})
    }  
    
    }

    exports.updateStore = async(req,res)=>{
        try{
            
            const storeID= req.params._id
            const {storeId,address} = req.body
            // console.log(storeID)
            const store = await Store.findOneAndUpdate({storeID},{
                 $set: { storeId,address } 
            })
            // console.log(store)
        
          return res.status(200).json({
            message: "store updated successfully",
            success:true,
            data:store
    
          })
        }catch(err){
            console.error(err)
         res.status(500).json({ Error: "Internal server Error",
         route: "/:_id"})
        }  
        
        }
        exports.deleteStore = async(req,res,next)=>{
            try{
                
                const deleteStore= req.params._id
                const store = await Store.findOneAndDelete({"_id":deleteStore})
            
              return res.status(200).json({
                message:'Store delete successfully',
                success:true,
                data:store
        
              })
            }catch(err){
                console.error(err)
                res.status(500).json({  Error: "Internal server Error",
                route: "/:_id"})
            }  
            
            }