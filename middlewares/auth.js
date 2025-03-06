const app=require("C:\Users\Lenovo\Desktop\devtinder\src\app.js");
const adminAuth=app.use("/admin",(req,res)=>
    {   console.log("Server running successfully");
        const token="xyz";
        if(!token=="xyz")
        {
            res.status(401).send("unauthorized admin")
        }
        else
        {
            next();
        }
    });
const userAuth=app.use("/user",(req,res)=>
{   console.log("Server running successfully");
    const token="xyz";
    if(!token=="xyz")
    {
        res.status(401).send("unauthorized user")
    }
    else
    {
        next();
    }
})
module.exports ={adminAuth,userAuth}
    