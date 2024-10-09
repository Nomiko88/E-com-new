import express from "express";
import cors from "cors";
import categoryRouter from "./routes/category.route";
import { connectToDatabase } from "./database";

const app = express();
const port = 5555;

connectToDatabase()
app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
    res.json({ message: "smile shajhsjahs" });
});

app.use(categoryRouter);

app.listen(port, () => {
    console.log(`Сервер ${port} порт дээр ажиллаж байна`);
});