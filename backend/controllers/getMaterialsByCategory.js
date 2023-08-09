const Material = require('./../models/material')

const getMaterialsByCategory = async (req, res) => {
    try {
        const catId = req.params.categoryId

        const materials = await Material.find({
            categoryId: catId
        }).populate('categoryId').populate('userId')

        materials.forEach(el => el.img = `${req.protocol}://${req.host}:${process.env.PORT}/${el.img}`)

        await res.json(materials)
    } catch (e) {
        await res.status(500).json(e)
    }
}

module.exports = getMaterialsByCategory