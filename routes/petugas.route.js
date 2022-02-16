'use strict'

const express = require("express")
const petugasController = require('../controllers/petugas.controller')
const router = new express.Router()

router.get("/getAll", petugasController.getAll)
router.get("/getId/:id", petugasController.getId)
router.post("/add", petugasController.add)
router.put("/update/:id", petugasController.update)
router.delete("/delete/:id", petugasController.delete)

module.exports = router