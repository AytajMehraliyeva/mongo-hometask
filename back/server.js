const express = require("express")
const cors = require("cors")
require('dotenv').config()
const mongoose = require("mongoose")
const DataRouter= require('./routing/Data.routes')
const app = express()
const PORT = process.env.PORT || 5000
app.use(cors())
app.use(express.json())
app.use("/datas", DataRouter)


mongoose.connect(`mongodb+srv://tu7lzxxdc:aytac123@cluster1.fvv4h2i.mongodb.net/`).then(res => {
    console.log("Connect to db")
})

app.listen(PORT, () => {
    console.log("App running on 5000")
})