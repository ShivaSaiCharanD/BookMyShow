import mongoose from "mongoose";

// Data, StartAt, Seats, OrderID, TicketPrice, Total, MovieID, TheatreID, Name, Phone
const ReservationSchema = new mongoose.Schema({
    Data:{
        type:Date,
        required:true,
    },
    StartAt:{
        type:Date,
        required:true,
    },
    Seats:{
        type:Number,
        required:true,
    },
    OrderID:{
        type:String,
        required:true,
    },
    TicketPrice:{
        type:Number,
        required:true,
        ref : 'Showtime'
    },
    Total:{
        type:Number,
        required:true,
    },
    MovieID:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Movie',
        required:true,
        
    },
    TheatreID:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Theatre'
    },
    Name:{
        type:String,
        required:true,
        ref: 'User'
    },
    Phone:{
        type:String,
        required:true,
        ref: 'User'
    }
})

const Reservation = mongoose.model('Reservation',ReservationSchema);
export default Reservation;