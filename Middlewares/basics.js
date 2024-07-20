const express = require("express")
const app = express();
const port = 3000;
app.listen(port,()=>{console.log("Listening on port 3000")});

let numberOfReq=0;

function tracker(req,res,next)
{
    numberOfReq++;
    console.log(numberOfReq);
    next();
}

app.use(tracker);

app.get("/first",(req,res)=>{
    // res.send("a");
})
app.get("/second",(req,res)=>{
    // res.send("b");
})
app.get("/third",(req,res)=>{
    // res.send("c");
})