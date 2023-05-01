const mongoose = require('mongoose');
const db_link='mongodb+srv://shaleenhero123:sallu123@cluster0.o4ejlkz.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(db_link)
    .then((db)=>{
        console.log("lecture database connected");
    })
    .catch((err)=>{
        console.log("database connection error: ",err);
    })

lectureSchema = mongoose.Schema({
    transcript:{ // 
        type:String,
        ref:'studentModel'
    },
    summary:{ // 
        type:String,
        required:[true,"Please choose the lecture category"]
    },
    notes:[{
        type:String,
    }],
    audio_url:{
        type:String,
    },
    taught_by:{
        type:String,
        required:[true,"Please enter your availablity"]
    },
    created:{ // time
        type:Date,
        default:Date.now()
    }
})


const lectureModel = mongoose.model('lectureModel',lectureSchema);
module.exports = lectureModel