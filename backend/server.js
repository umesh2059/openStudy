import express from "express";
import dotenv from "dotenv";
import cors from "cors";

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());     


app.get("/notes", (req, res) => {
    res.send({ message: "get/notes-server is running" });
});

app.post("/health", (req, res) => {
    res.send({ message: "server is running smoothly" });
});

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});
