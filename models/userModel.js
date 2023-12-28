import mongoose from "mongoose";
//creating user schema'table'

const userSchema = mongoose.Schema({
    name:{type:String,required:true},    
    email:{type:String,required:true},    
    phone:{type:Number,required:true},    
    password:{type:String,required:true},    
    isAdmin:{type:Boolean,required:true,default:false},
    address:{type:String,required:true},
  
})

const Users = mongoose.model('users',userSchema)

export default Users;
