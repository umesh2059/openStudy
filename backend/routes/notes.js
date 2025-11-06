import express from "express"

import {createNote,getNotes} from "../controller/notescontroller"

const router= express.Router();

router.post ("/",createNote);
router.get("/",getNotes);

export default router;