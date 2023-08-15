const mongoose = require("mongoose")


const UserSchema = mongoose.Schema({
    UserName:{
        type:String,
        require:true
    },
    Email:{
        type:Email,
        require:true
    },
    PassWord:{
        type:String,
        require:true
    }
})


const usermodel = mongoose.model("Users", UserSchema)

module.exports = usermodel