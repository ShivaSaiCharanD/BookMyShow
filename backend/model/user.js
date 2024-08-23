import mongoose from "mongoose";
// Name, Email, Password, Role (Admin, Customer, SuperAdmin), Phone, OrderID
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        required:true,
        enum : ['admin','user','superadmin'],
        default: 'user'
    },
    phone:{
        type:String,
        required:true,
    },
    orderID:{
        type:String,
        required:true,
    }
})

const User = mongoose.model('User',userSchema);
export default User;