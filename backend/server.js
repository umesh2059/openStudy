import express from "express";
import dotenv from "dotenv"

const app=express();

// middlewares
app.use(express.json)  //it helps allow to json parsing body
