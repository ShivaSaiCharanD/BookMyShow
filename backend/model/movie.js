import mongoose from "mongoose";

//Title, Image, Language, Genre, Director, Trailer, Description, Duration, StartDate, EndDate
const MovieSchema = new mongoose.Schema({
    Title:{
        type:String,
        required:true,
    },
    Image:{
        type:String,
        // required:true,
    },
    Language:{
        type:String,
        required:true,
    },
    Genre:{
        type:String,
        required:true,
    },
    Director:{
        type:String,
        required:true,
    },
    Trailer:{
        type:String,
        required:true,
    },
    Description:{
        type:String,
        required:true,
    },
    StartDate:{
        type:Date,
        required:true,
    },
    EndDate:{
        type:Date,
        required:true,
    }    
})

const Movie = mongoose.model('Movie',MovieSchema);
export default Movie;