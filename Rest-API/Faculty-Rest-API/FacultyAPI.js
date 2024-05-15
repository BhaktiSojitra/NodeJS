const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const Faculty=require('./Faculty');

mongoose.connect("mongodb://localhost:27017/College").then(()=>{
    console.log("connection established successfully");
    const app=express();

    app.use(bodyParser.urlencoded());

    app.get("/",async(req,res)=>{
        const data=await Faculty.find();
        res.json(data);
    });

    app.get("/:id",async(req,res)=>{
        const id=req.params.id;
        const result=await Faculty.findOne({id:id});
        res.json(result);
    });

    app.post("/",async(req,res)=>{
        const{id,FacultyName,FacultyDesignation,FacultyEducationQualification,FacultyExperience,FacultyWorkingSince,FacultyImage}=req.body;
        const faculty=Faculty();
        faculty.id=id;
        faculty.FacultyName=FacultyName;
        faculty.FacultyDesignation=FacultyDesignation;
        faculty.FacultyEducationQualification=FacultyEducationQualification;
        faculty.FacultyExperience=FacultyExperience;
        faculty.FacultyWorkingSince=FacultyWorkingSince;
        faculty.FacultyImage=FacultyImage;
        const result=await faculty.save();
        res.json(result);
    });

    app.put("/:id",async(req,res)=>{
        const{FacultyName,FacultyDesignation,FacultyEducationQualification,
            FacultyExperience,FacultyWorkingSince,FacultyImage}=req.body;
        const result=await Faculty.findOne({id:req.params.id});
        result.FacultyName=FacultyName;
        result.FacultyDesignation=FacultyDesignation;
        result.FacultyEducationQualification=FacultyEducationQualification;
        result.FacultyExperience=FacultyExperience;
        result.FacultyWorkingSince=FacultyWorkingSince;
        result.FacultyImage=FacultyImage;
        result.save();
        res.json(result);
    });

    app.delete("/:id",async(req,res)=>{
        const result=await Faculty.deleteOne({id:req.params.id});
        res.json(result);
    });

    app.listen(3000,()=>{
        console.log("server started...");
    });
});