'use strict'

const express = require("express")
const sppController = require('../controllers/spp.controller')
const router = new express.Router()
const {
    checkTokenAdmin
} = require("../auth/token-admin")

router.get("/getAll", checkTokenAdmin, sppController.getAll)
router.get("/getId/:id", checkTokenAdmin, sppController.getId)
router.post("/add", checkTokenAdmin, sppController.add)
router.put("/update/:id", checkTokenAdmin, sppController.update)
router.delete("/delete/:id", checkTokenAdmin, sppController.delete)

module.exports = router