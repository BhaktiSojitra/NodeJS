const express=require('express');
const app=express();

let data=[
    {id:1,name:"xyz"},
    {id:1,name:"abc"},
];

app.use("/",(req,res,next)=>{
    console.log("app used called");
    next();
});

app.get("/",(req,res)=>{
    res.json(data)
});

app.get("/:id",(req,res)=>{
    const id=parseInt(req.params.id);
    const item=data.find((item) => item.id = id)
    if(item){
        res.json(item);
    }
    else{
        res.json({message:"item not found"});
    }
    res.json(data);
});

app.post("/:name",(req,res)=>{
    const name=req.params.name;
    const id=data.length+1;
    const obj={id,name};
    data.push(obj);
    res.json(data);
});

app.put("/:id/:name",(req,res)=>{
    const id=parseInt(req.params.id);
    const name=req.params.name;
    const index=data.findIndex((item)=>item.id=id);
    if(index!=-1){
        data[index].name=name;
        res.json(data);
    }
    else{
        res.json({message:"item not found"});
    }
});

app.delete("/:id",(req,res)=>{
    const id=parseInt(req.params.id);
    data=data.filter((item)=>item.id!==id);
    res.json(data);
});

app.listen(3000,()=>{
    console.log("server started...");
}); 