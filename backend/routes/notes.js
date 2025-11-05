import express from "express"

const router= express.Router();

router.post ("/",createNote);
router.get("/",getNotes);

export default router;