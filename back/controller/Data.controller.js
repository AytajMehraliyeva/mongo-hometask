const { Datas } = require("../model/Data.model")


const DataController = {
    getAll: async(req, res) => {
        try {
            const datas = await Datas.find()
            res.status(200).send(datas)
        } catch (error) {
            res.status(404).send("An occures while getting items")
        }
    },

    getById: async(req, res) => {
        try {
            const { id } = req.params
            const target = await Datas.findById(id)
            res.status(200).send(target)
        } catch (error) {
            res.status(404).send("An occures while getting by ID items")
        }
    },

    add: async(req, res) => {
        try {
            const { name, price, img } = req.body
            const newDatas = new Datas({ name, price, img })
            await newDatas.save()
            res.status(201).send("New items created")
        } catch (error) {
            res.status(404).send("An occures while adding product")
        }
    },

    edit: async(req, res) => {
        try {
            const { id } = req.params
            const { name, price, img } = req.body
            const editDatas= await Datas.findByIdAndUpdate(id, { name, price, img })
            res.status(200).send("Item updated!")
        } catch (error) {
            res.status(404).send("an occures while editing product")
        }
    },
    delete: async(req, res) => {
        try {
            const { id } = req.params
            await Datas.findByIdAndDelete(id)
            res.send("Item deleted!")
        } catch (error) {
            res.status(404).send("an occures while deleting product")
        }
    }
}

module.exports = { DataController }