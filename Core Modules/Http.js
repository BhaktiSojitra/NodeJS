const http=require('http');
const server=http.createServer((req,res)=>{

    //get method
    if(req.method==="GET" && req.url==="/"){
        res.writeHead(200,{"Content-Type":"text/plain"});
        res.end("get method executed successfully");
    }

    //post method
    else if(req.method==="POST" && req.url==="/submit"){
        res.writeHead(200,{"Content-Type":"text/plain"});
        res.end("post method executed successfully");
    }

    //put method
    else if(req.method==="PUT" && req.url.startsWith("/update/")){
        //console.log(req.url.split("/"));
        res.writeHead(200,{"Content-Type":"text/plain"});
        //const id=req.url.split("/")[2];
        const id=req.url.split('/')[2];
        res.end(`PUT method executed successfully with ID: ${id}`);
    }

    //delte method
    else if(req.method==="DELETE" && req.url.startsWith("/delete/")){
        res.writeHead(200,{"Content-Type":"text/plain"});
        res.end("delete method executed successfully");
    }

    else {
        res.writeHead(404,{"Content-Type":"text/plain"});
        res.end("Not Found");
    }
});

server.listen(3000,()=>{
    console.log("server is started @http://localhost//3000");
});