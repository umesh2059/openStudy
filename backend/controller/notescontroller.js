import {db} from "../config/firebaseAdmin.js";
 
export const createNote=async(req,res)=>{
    try{
       const {title,content,userId}=requestAnimationFrame.body;
       const newNote={title,content,userId,createdAt:new Date()};
       await db.collection("notes").add (newNote);
       res.status(201).json({message:"note created succesffully"});
    }catch(error){
         res.status(500).json({error:error.message})
    }
};

export const getNotes=async(req,res)=>{
    try{
        
    }
}