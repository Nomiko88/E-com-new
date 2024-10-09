
import { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import { userModel } from "../../models/user.schema";
import dotenv from "dotenv";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET as string;

export const getMe: RequestHandler = async (req, res) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
            return res.status(401).json({ message: "No token" });
        }

        const decoded = jwt.verify(token, JWT_SECRET) as { userId: string };

        const user = await userModel.findById(decoded.userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        return res.status(200).json({
            user: {
                id: user._id,
                username: user.userName,
                email: user.email,
            }
        });
    } catch (error) {
        console.error("Token error", error);
        return res.status(500).json({ message: "Server error" });
    }
};
