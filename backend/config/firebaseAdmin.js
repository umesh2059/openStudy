import admin  from "firebase-admin"
import dotenv from "dotenv";

dotenv.config()


admin.initializeApp({
    credential:admin.credential.cert(server.account),
})

const db=admin.firestore();
const auth=admin.auth();

export  {db,auth};