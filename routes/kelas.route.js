'use strict'

const express = require("express")
const kelasController = require('../controllers/kelas.controller')
const router = new express.Router()
const {
    checkTokenAdmin
} = require("../auth/token-admin")

router.get("/getAll", checkTokenAdmin, kelasController.getAll)
router.get("/getId/:id", checkTokenAdmin, kelasController.getId)
router.post("/add", checkTokenAdmin, kelasController.add)
router.put("/update/:id", checkTokenAdmin, kelasController.update)
router.delete("/delete/:id", checkTokenAdmin, kelasController.delete)

module.exports = router