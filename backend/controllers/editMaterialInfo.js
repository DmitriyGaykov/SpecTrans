const Material = require("../models/material");
const renameFile = require("../scripts/renameFile");
const path = require("path");

const editMaterialInfo = async (req, res) => {
    try {
        const _id = req.params.id
        const material = req.body

        let update = {
            ...material
        }

        const img = req.files?.img
        if(img) {
            img.name = renameFile(img, _id)
            await img.mv(path.resolve(__dirname, '../public/img/users', img.name))

            update = {
                ...update,
                img: '/img/users/' + img.name
            }
        }

        const updMaterial = await Material.findByIdAndUpdate(_id, update).populate('userId')

        console.log(Object.assign(updMaterial, update))

        res.json(updMaterial)
    } catch (e) {
        res.status(400).json(e)
    }
}

module.exports = editMaterialInfo