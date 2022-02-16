'use strict'

const express = require("express")
const siswaController = require('../controllers/siswa.controller')
const router = new express.Router()

router.get("/getAll", siswaController.getAll)
router.get("/getId/:nisn", siswaController.getId)
router.post("/add", siswaController.add)
router.put("/update/:nisn", siswaController.update)
router.delete("/delete/:nisn", siswaController.delete)

module.exports = router