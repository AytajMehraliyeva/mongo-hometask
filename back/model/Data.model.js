const mongoose = require("mongoose")

const Datas = mongoose.model("Datas", new mongoose.Schema({
    name: String,
   
    price: Number,
    img: String
}))

module.exports = { Datas }