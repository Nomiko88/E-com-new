"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get("/", (_req, res) => {
    res.json({ message: "smile" });
});
app.listen(5555, () => {
    console.log("Server is running on http://localhost:5555");
});
