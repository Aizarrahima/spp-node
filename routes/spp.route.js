'use strict'

const express = require("express")
const sppController = require('../controllers/spp.controller')
const router = new express.Router()

router.get("/getAll", sppController.getAll)
router.get("/getId/:id", sppController.getId)
router.post("/add", sppController.add)
router.put("/update/:id", sppController.update)
router.delete("/delete/:id", sppController.delete)

module.exports = router