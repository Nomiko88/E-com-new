import { model, Schema } from "mongoose";

const productSchema = new Schema({
    type: {
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    catergory: {
        type: String,
        required: true
    },
    gty: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    productImage: {
        type: [String],
        required: true
    },
    createdAt: {
        type: Date,
        required: true
    },
    updatedAt: {
        type: Date,
        required: true
    },
    totalReview: {
        type: Number,
        required: true
    },
    averageReview: {
        type: Number,
        required: true
    }
})
export const productModel = model("Product", productSchema);