import {auth} from "../config/firebaseAdmin.js"


export const verifyUser=async(req,res)=>{
    try{
        const idToken=req.body.token;
        if (!idToken){
            return res.status(400).json({error:"no token provided"})
        }

        const decodedToken=await auth.verifyIdToken(idToken);
        res.status(200).json({
            messsage:"user verified successfully ",
            user:decodedToken,  //contains uid,email,etc
        });
    }catch(error){
        res.status(401).json({error:"inavlid or expired token"})
    }
};


// get all users (for admin)

export const getAllUsers=async(req,res)=>{ 
    try{
        const listUserResult=await auth.listUsers();
        const users=listUserResult.users.map((userRecord)=>({
            uid:userRecord.uid,
            email:userRecord.email,
            displayName:userRecord.displayName,
        }))
        res.status(200).json(users);
    }catch(error){
        res.status(500).json({error:"error message"})
    }

}

