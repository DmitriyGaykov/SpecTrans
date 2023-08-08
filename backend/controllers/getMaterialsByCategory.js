const Material = require('./../models/material')
const mongoose = require("mongoose");

const getMaterialsByCategory = async (req, res) => {
    try {
        const catId = req.params.categoryId

        const materials = await Material.find({
            categoryId: catId
        })

        materials.forEach(el => el.img = `${req.protocol}://${req.host}:${process.env.PORT}/${el.img}`)

        await res.json(materials)
    } catch (e) {
        console.warn(e)
        await res.status(500).json(e)
    }
}

module.exports = getMaterialsByCategory