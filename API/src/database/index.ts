import { connect } from "mongoose";

export const connectToDatabase = async () => {
    await connect(
        "mongodb+srv://greativitynomin:Nomiko8807%40@commerce.1abtz.mongodb.net/"
    );

    console.log("Connected to database");
};
