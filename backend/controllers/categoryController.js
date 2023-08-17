const Category = require("../models/category");
const {generateException} = require("../scripts/exceptionScript");

class CategoryController {
    // [GET]
    async getCategory(req, res ) {
        try {
            const cats = await Category.find({ })
            await res.json(cats)
        } catch (e) {
            await res.json([])
        }
    }

    async addCategory(req, res) {
        try {
            const cat = req.body
            const category = await Category.create({ ...cat })
            res.json(category)
        } catch (e) {
            res.status(500).json(generateException('error', 'Внутренняя ошибка'))
        }
    }
}

module.exports = new CategoryController()