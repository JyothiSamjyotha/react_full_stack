const express  = require("express");
const userModel = require("../models/userModel");
const router = express.Router()
router.get("/",async(req,res) =>{
    try {
        const showAll = await userModel.find()
        res.status(200).json(showAll)

    } catch (error) {
        console.log(error);
        res.status(400).json({error:error.message});
        
    }
    
}
)

router.get("/:id",async(req,res) =>{
    const {id} = req.params;
    try {
        const singleUser = await userModel.findById({_id:id})
        res.status(200).json(singleUser)

    } catch (error) {
        console.log(error);
        res.status(400).json({error:error.message});
        
    }
    
}
)

router.delete("/:id",async(req,res) =>{
    const {id} = req.params;
    try {
        const singleUser = await userModel.findByIdAndDelete({_id:id})
        res.status(200).json(singleUser)

    } catch (error) {
        console.log(error);
        res.status(400).json({error:error.message});
        
    }
    
}
)

router.patch("/:id",async(req,res) =>{
    const {id} = req.params;
    const {name,email,age} = req.body;
    try {
        const UpdateUser = await userModel.findByIdAndUpdate(id,req.body,{
            new:true
        })
        res.status(200).json(UpdateUser)

    } catch (error) {
        console.log(error);
        res.status(400).json({error:error.message});
        
    }
    
}
)


router.post("/",async (req,res) =>{
    const {name,email,age} = req.body
    const User = require("../models/userModel")
    try {
        const UserData = await User.create({
            name : name,
            email : email,
            age:age,
        })
        res.status(201).json(UserData)
        
    } catch (error) {
        console.log(error)
        res.status(400).json({error : error.message})
        
    }
    
}
)

module.exports = router;