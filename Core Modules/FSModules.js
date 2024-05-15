const fs=require('fs');

fs.exists('Demo.js',(exists)=>{
    console.log("exisis:- "+exists)
});

fs.stat('Demo.js',(error,stat)=>{
    console.log(stat);
});

fs.readFile('sample.txt',(error,data)=>{
    console.log("read file:- "+data.toString());
});

fs.writeFile('sample.txt','bhakti',(error,data)=>{
    console.log("write file:- "+data);
});

fs.appendFile('sample.txt','d.',(error,data)=>{
    console.log("append file:- "+data);
});

fs.readFile('sample.txt',(error,data)=>{
    console.log("read file:- "+data.toString());
});

fs.rename('sample.txt','new.txt',(error)=>{
    console.log("rename file:- "+error);
});

/*fs.rename('new.txt','sample.txt',(error)=>{
    console.log(error);
});*/

fs.unlink('new.txt',(error)=>{
    console.log("unlink:- "+error);
});