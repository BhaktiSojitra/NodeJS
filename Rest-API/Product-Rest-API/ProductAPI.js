const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const Product=require('./Product');

mongoose.connect("mongodb://localhost:27017/Shop").then(()=>{
    console.log("connection established successfully");
    const app=express();

    app.use(bodyParser.urlencoded());

    app.get("/",async(req,res)=>{
        const result=await Product.find();
        res.json(result);
    });

    app.get("/:id",async(req,res)=>{
        const result=await Product.findOne({id:req.params.id});
        res.json(result);
    });

    app.post("/",async(req,res)=>{
        const {id,Name,Price,Quantity,Category,Description}=req.body;
        const product=Product();
        product.id=id;
        product.Name=Name;
        product.Price=Price;
        product.Quantity=Quantity;
        product.Category=Category;
        product.Description=Description;
        const result=await product.save();
        res.json(result);
    });

    app.put("/:id",async(req,res)=>{
        const{Name,Price,Quantity,Category,Description}=req.body;
        const result=await Product.findOne({id:req.params.id});
        result.Name=Name;
        result.Price=Price;
        result.Quantity=Quantity;
        result.Category=Category;
        result.Description=Description
        result.save();
        res.json(result);
    });

    app.delete("/:id",async(req,res)=>{
        const result=await Product.deleteOne({id:req.params.id});
        res.json(result);
    });

    app.listen(3000,()=>{
        console.log("server started...");
    });
});

/*const data=await student.updateone({id:req.params.id});
res.json(data);
delete one */