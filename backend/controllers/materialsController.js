const Material = require("../models/material");
const renameFile = require("../scripts/renameFile");
const path = require("path");

class MaterialsController {
    // [POST]
    async addMaterial (req, res) {
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

    // [DELETE]
    async dellMaterial(req, res) {
        try {
            const idMaterial = req.params.id
            await Material.findByIdAndRemove(idMaterial)
            res.json({ message: 'Успешно' })
        } catch (e) {
            res.status.json(e)
        }
    }

    // [PUT]
    async editMaterialInfo(req, res) {
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

            res.json(updMaterial)
        } catch (e) {
            res.status(400).json(e)
        }
    }

    // [GET]
    async getMaterialsByCategory(req, res) {
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
}

module.exports = new MaterialsController()