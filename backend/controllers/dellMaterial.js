const Material = require("../models/material");
const dellMaterial = async (req, res) => {
    try {
        const idMaterial = req.params.id
        await Material.findByIdAndRemove(idMaterial)
        res.json({ message: 'Успешно' })
    } catch (e) {
        res.status.json(e)
    }
}

module.exports = dellMaterial