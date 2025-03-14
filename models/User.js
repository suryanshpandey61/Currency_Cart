import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email:{
        type:String,
        required:[true,"Please provide an valid email address"],
        unique:true,
        trim:true,
    },
    password:{
        type:String,
        required:[true,"Enter strong pass which includes Upper & Lower Case"],
    }
})

const User  = mongoose.models.User || mongoose.model('User',UserSchema);

export default User;