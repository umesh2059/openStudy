import express from "express";
import dotenv from "dotenv";
import cors from "cors";


const app=express();


const PORT=process.env.PORT||5000;
app.use(express.json)  

app.get("/",(req,res)=>{
    res.send("server is running successfully")
})
app.listen (PORT,()=>{
    console.log(`server is running on port ${PORT}`);
});