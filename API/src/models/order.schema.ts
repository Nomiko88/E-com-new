import { model, Schema } from "mongoose";

const orderSchema = new Schema({
    type: { type: String, required: true },
    products: [{
        product: {
            type: Schema.Types.ObjectId,
            ref: "Product",
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        qty: {
            type: Number,
            required: true
        }
    }],
    user: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    orderStatus: {
        type: String,
        required: true
    },
    shippingAddress: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true
    },
    updatedAt: {
        type: Date,
        required: true
    }
})
export const orderModel = model("Order", orderSchema)