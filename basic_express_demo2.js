const express=require('express');
const app=express();

app.get('/get',(req,res)=>{
    res.send("get method called..");
});

app.post('/post',(req,res)=>{
    res.send("post method called..");
});

app.put('/update/',(req,res)=>{
    res.send("put method called..");
});

app.delete('/delete',(req,res)=>{
    res.send("delete method called..");
});

app.listen(5000,()=>{
    console.log("server started...");
});