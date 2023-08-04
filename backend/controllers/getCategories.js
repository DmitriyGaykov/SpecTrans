const mongoose = require("mongoose");
const Category = require('./../models/category')
const getCategories = async (req, res) => {
    try {
        const cats = await Category.find({ })
        await res.json(cats)
    } catch (e) {
        console.warn(e)
        await res.json([])
    }
}

module.exports = getCategories