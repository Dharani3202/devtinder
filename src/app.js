const express=require("express");
const app=express();
const { adminAuth,userAuth } = require("../middlewares/auth");
app.get("admin/getdetails",adminAuth,(req,res)=>
{
    res.send("details fetched");
});
app.delete("admin/deleteUser",adminAuth,(req,res)=>
{
    res.send("User deleted");
});
app.get("user/login",userAuth,(req,res)=>
{
    res.send("user logged in successfully");
})