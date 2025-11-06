import admin  from "firebase-admin"
import dotenv from "dotenv";

dotenv.config()

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);


admin.initializeApp({
    credential:admin.credential.cert(serviceAccount),
})

const db=admin.firestore();  //firestore database
const auth=admin.auth();     //firebase authentication

export  {db,auth};