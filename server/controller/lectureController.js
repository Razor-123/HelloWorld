const studentModel = require('../models/studentModel');
const lectureModel = require('../models/lectureModel');

module.exports.createLecture = async function createLecture(req,res){
    try{
        const tempdata = req.body;
        const user = await lectureModel.create(tempdata);
        if (user){
            res.json({
                status:"ok",
                message:"Lecture created success",
                data:user
            })
        }else{
            res.json({
                status:"error",
                message:"error while creating lecture"
            })
        }
    }catch(err){
        //console.log("err ",err);
        res.json({
            status:"error",
            message:err.message
        })
    }
}

module.exports.getAlllectures = async function getAlllectures(req,res){
    try{
        let alllectures = await lectureModel.find();
        res.json({
            status:"ok",
            message:"lectures fetched success",
            data:alllectures
        })
    }catch(err){
        res.json({
            status:"error",
            message:err.message
        })
    }
}

module.exports.deleteLecture = async function deleteLecture(req,res){
    try{
        ///////////////  <- TODO
        let lec_id = req.params.id;
        let lec = await lectureModel.findByIdAndDelete(lec_id);
        res.json({
            status:"ok",
            message:"lectures deleted success",
            data:lec
        })
    }catch(err){
        res.json({
            status:"error",
            message:err.message
        })
    }
}

module.exports.getLecture = async function getLecture(req,res){
    try{
        let lec_id = req.params.id;
        let lec = await lectureModel.findById(lec_id);
        ///////////  <- TODO
        res.json({
            status:"ok",
            message:"lecture fetched success",
            data:lec
        })
    }catch(err){
        res.json({
            status:"error",
            message:err.message
        })
    }
}