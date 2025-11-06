import express from "express";

import {verifyUser,getAllUSer} from "../controller/authcontroller"

const router = express.Router();    

router.post ("/verify",verifyUser)
router.get("/users",getAllUSer)

export default router;


