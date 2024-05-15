const express=require('express');
const bodyParser=require('body-parser');
const app=express();

app.use(bodyParser.json());
let data=[
    {id:1,name:"xyz"},
    {id:1,name:"abc"},
];

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

app.post("/",(req,res)=>{
    const {name}=req.body;
    const id=data.length+1;
    const obj={id,name};
    data.push(obj);
    res.json(data);
});

app.put("/:id",(req,res)=>{
    const id=parseInt(req.params.id);
    const {name}=req.body;
    const index=data.findIndex((item)=>item.id=id);
    if(index!=-1){
        data[index].name=name;
        res.json(data);
    }
    else{
        res.json({message:"item not found"});
    }
});

app.delete("/",(req,res)=>{
    const id=parseInt(req.body.id);
    data=data.filter((item)=>item.id!==id);
    res.json(data);
});

app.listen(3000,()=>{
    console.log("server started...");
}); 