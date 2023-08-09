const Material = require('./../models/material')
const path = require('path')

const renameFile = require("../scripts/renameFile");

const addMaterial = async (req, res) => {
    try {
        const img = req?.files?.img
        const body = req.body

        const material = await Material.create({
            ...body,
            img: img?.name
        })

        res.status(204).json()

        img.name = renameFile(img, material._id)
        await img.mv(path.resolve(__dirname, '../public/img', img.name))
        await Material.findByIdAndUpdate(material._id, { img: "img/" + img.name})
    } catch (e) {
        res.status(500).json(e.errors)
    }
}

module.exports = addMaterial