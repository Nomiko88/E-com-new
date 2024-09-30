import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
    res.json({ message: "smile" })
});

app.listen(5555, () => {
    console.log("Server is running on http://localhost:5555")
});

