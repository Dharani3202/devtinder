const express=require("express");
const app=express();
app.use("/test",(req,res)=>{
    res.send("yoo from the test")
})
app.use("/home",(req,res)=>{
    res.send("yoo from the test")
})
app.listen(3000,()=>{console.log("Server is running")});
