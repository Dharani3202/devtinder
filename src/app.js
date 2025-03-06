const express=require("express");
const app=express();
app.use("/user",(req,res)=>
{
    res.send("Youla");
})
// now in the above if i  make a get api call in postman for localhost:3000/user it will send
//  responsea as youla becuase app.use is first and then app.get is second in here so  order 
// matters and also use will hanlde all type of http methods like get,post,put etc
app.get("/user",(req,res)=>
{
    res.send({firstname:"Akshay",lastname:"saini"});
})
app.post("/user",(req,res)=>
    {
        res.send("Data successfully saved in db");
    })
app.listen(3000,()=>{console.log("Server is running")});
