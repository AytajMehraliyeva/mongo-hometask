const cors = require("cors")
const express = require("express")

require('dotenv').config()
const mongoose = require("mongoose")
const ProductRouter = require("./routing/Data.routes")
const app = express()
const PORT = process.env.PORT || 2023

app.use(cors())
app.use(express.json())
app.use("/datas", ProductRouter)


mongoose.connect("mongodb+srv://tu7lzxxdc:aytac123@cluster0.fvv4h2i.mongodb.net/").then(res => {
    console.log("Connected to db")
})

app.listen(PORT, () => {
    console.log("App running on 2023")
})