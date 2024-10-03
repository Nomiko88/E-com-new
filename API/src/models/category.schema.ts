import { model, Schema } from "mongoose"

const categorySchema = new Schema({
    type: { type: String, required: true },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true }
})
export const categoryModel = model("Category", categorySchema)