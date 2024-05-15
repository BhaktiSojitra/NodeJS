const express=require('express');
const fs=require('fs');
const app=express();

/*fs.writeFile('sample.txt','bhakti',(error,data)=>{
    console.log("write file:- "+data);
});*/

app.get('/',(req,res)=>{
    throw new Error('not found');
});

app.get("/sample",(req,res,next)=>{
    fs.readFile("sample.txt",(error,data)=>{
        if(error){
            next(error);
        }
        else{
            res.send(data);
        }
    });
});

app.listen(3000,()=>{
    console.log("server started...");
});