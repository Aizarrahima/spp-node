'use strict'

const express = require("express")
const petugasController = require('../controllers/petugas.controller')
const router = new express.Router()
const {
    checkTokenAdmin
} = require("../auth/token-admin")

router.get("/getAll", checkTokenAdmin, petugasController.getAll)
router.get("/getId/:id", checkTokenAdmin, petugasController.getId)
router.post("/add", checkTokenAdmin, petugasController.add)
router.put("/update/:id", checkTokenAdmin, petugasController.update)
router.delete("/delete/:id", checkTokenAdmin, petugasController.delete)

module.exports = router