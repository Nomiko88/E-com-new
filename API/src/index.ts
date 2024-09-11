import express from "express";

const app = express();

app.get("/", (_req, res) => {
    res.json({ message: "smile" })
});

app.listen(5555, () => {
    console.log("Server is running on http://localhost:5555");
})