const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const Student=require('./Student');

mongoose.connect("mongodb://localhost:27017/College").then(()=>{
    console.log("connection established successfully");
    const app=express();

    app.use(bodyParser.urlencoded());

    app.get("/",async(req,res)=>{
        const data=await Student.find();
        res.json(data);
    });

    app.get("/:id",async(req,res)=>{
        const id=req.params.id;
        const result=await Student.findOne({id:id});
        res.json(result);
    });

    app.post("/",async(req,res)=>{
        const{id,name,rollno,SPI,branch}=req.body;
        const student=Student();
        student.id=id;
        student.name=name;
        student.rollno=rollno;
        student.SPI=SPI;
        student.branch=branch;
        const data=await student.save();
        res.json(data);
    });

    app.put("/:id",async(req,res)=>{
        const{name,rollno,SPI,branch}=req.body;
        const result=await Student.findOne({id:req.params.id});
        result.name=name;
        result.rollno=rollno;
        result.SPI=SPI;
        result.branch=branch;
        result.save();
        res.json(result);
    });

    app.delete("/:id",async(req,res)=>{
        const result=await Student.deleteOne({id:req.params.id});
        res.json(result);
    });

    app.listen(3000,()=>{
        console.log("server started...");
    });
});