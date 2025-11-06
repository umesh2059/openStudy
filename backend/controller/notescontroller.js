import {db} from "../config/firebaseAdmin.js";
 
export const createNote=async(req,res)=>{
    try{
       const {title,content,userId}=req.body;
       const newNote={title,content,userId,createdAt:new Date()};
       await db.collection("notes").add (newNote);
       res.status(201).json({message:"note created succesffully"});
    }catch(error){
         res.status(500).json({error:error.message})
    }
};

export const getNotes=async(req,res)=>{
    try{
   const snapshot=await db.collection("notes").get();
   const notes=snapshot.docs.map(doc=>({id:doc.id,...doc.data()}));
   res.json(notes);
    }catch(error){

    res.status(500).json({error:error.message})
    }
}