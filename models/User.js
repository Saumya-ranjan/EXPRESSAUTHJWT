import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true},
    password:{type:String, required:true},
    tc:{type:String, required:true}
})


// Model
const UserModel = mongoose.model("user", userSchema);
export default UserModel;