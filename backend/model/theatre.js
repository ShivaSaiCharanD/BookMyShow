import mongoose from "mongoose";
// Name, City, TicketPrice, Seats, Image,
const TheatreSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true,
    },
    City:{
        type:String,
        required:true,
    },
    TicketPrice:{
        type:Number,
        required:true,
    },
    Seats:{
        type:Number,
        required:true,
    },
    Image:{
        type:String,
        required:true,
    }
})

const Theatre = mongoose.model('Theatre',TheatreSchema);
export default Theatre;

