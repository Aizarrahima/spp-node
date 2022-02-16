'use strict'

const express = require("express")
const kelasController = require('../controllers/kelas.controller')
const router = new express.Router()

router.get("/getAll", kelasController.getAll)
router.get("/getId/:id", kelasController.getId)
router.post("/add", kelasController.add)
router.put("/update/:id", kelasController.update)
router.delete("/delete/:id", kelasController.delete)

module.exports = router