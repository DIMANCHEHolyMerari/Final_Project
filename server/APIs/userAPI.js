const express = require("express")
const { default: mongoose } = require("mongoose")
const router = express.Router()
const usermodel = require("../models/userModel")

router.post("/connexion", (req,res)=>{
    const connexion = req.body
    task.push(connexion)
    res.send(task)
})


mongoose.connect("mongodb://localhost:27017/database2")

router.post("/SignUp", async(req, res)=> {
    const signupuser = req.body
    try {
        let verify = await usermodel.findOne({
            Email:signupuser.Email
        })
        if(verify){
            res.send("user already exist")
        }
        else{
            const newuser = new usermodel(signupuser)
            let save = await newuser.save()
            if (save){
                console.log("user inserted");
                res.send("user inserted")
            }
            else{
                console.log("user not inserted");

                res.send("not inserted")
            }
        }
    } catch (err) {
        console.log(err)
    }
})


router.post("/SingIn", async(req,res)=>{
    const userSingIn = req.body
    try {
        let verify = await usermodel.find({
            Email:userSingIn.Login,
            PassWord:userSingIn.PassWord
        })
        if(verify){
            res.send(verify)
        }
        else{
            res.send("user doesn't exist")
        }
    } catch (error) {
        console.log(error)
    }
} )


module.exports=router