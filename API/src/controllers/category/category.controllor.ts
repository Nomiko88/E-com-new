import { RequestHandler } from "express";
import { categoryModel } from "../../models/category.schema";

export const createCategory: RequestHandler = async (req, res) => {
    try {
        const { type } = req.body;

        const newCategory = await categoryModel.create({
            type,
        });
        return res.status(201).json({
            message: "amjilttai bolloo",
            category: newCategory,
        });
    }
    catch (err) {
        console.error("aldaa garsan", err);
        return res.status(500).json({ message: "servert alda burtgegdlee" });
    }
};

export const getCategories: RequestHandler = async (req, res) => {
    try {
        const categories = await categoryModel.find();
        return res.status(200).json(categories);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "error fetching Categories" })
    }
};
export const updateCategory: RequestHandler = async (req, res) => {
    try {
        const updateCategory = await categoryModel.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true, runValidators: true }
        );
        if (!updateCategory) {
            return res.status(404).json({ message: "category not found" });
        }
        return res.status(200).json({
            message: "Upated successfully",
            category: updateCategory,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error updating Category" })
    }
};

export const deleteCategory: RequestHandler = async (req, res) => {
    try {
        const deleteCategory = await categoryModel.findByIdAndDelete(
            req.params.id
        );
        if (!deleteCategory) {
            return res.status(404).json({ message: "category not found" });
        }
        return res.status(200).json({
            message: "category deleted successfully",
            category: deleteCategory,

        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "error deleting category" })
    }
}
