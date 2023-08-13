const Category = require("../models/category");

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
}

module.exports = new CategoryController()