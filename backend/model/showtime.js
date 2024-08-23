import mongoose from "mongoose";
// TicketPrice, StartDate, EndDate, MovieID, TheatreID
const ShowtimeSchema = new mongoose.Schema({
    TicketPrice:{
        type:Number,
        required:true,
    },
    StartDate:{
        type:Date,
        required:true,
    },
    EndDate:{
        type:Date,
        required:true,
    },
    MovieID:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Movie',
        required:true,
    },
    TheatreID:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Theatre',
        required:true,
    }
})

const Showtime = mongoose.model('Showtime',ShowtimeSchema);
export default Showtime;