const express = require("express")
const { DataController } = require("../controller/Data.controller")
const router = express.Router()

router.get("/", DataController.getAll)
router.get("/:id", DataController.getById)
router.post("/", DataController.add)
router.put("/:id", DataController.edit)
router.delete("/:id", DataController.delete)

module.exports = router