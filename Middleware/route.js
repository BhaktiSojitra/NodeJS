const express=require('express');
const app=express();

const student=require('./bulit-in-middleware');
app.use('/student',student);
app.use('/admin',student);

app.listen(3000,()=>{
    console.log("server started..");
});