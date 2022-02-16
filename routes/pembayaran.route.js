'use strict'

const express = require("express")
const pembayaranController = require('../controllers/pembayaran.controller')
const router = new express.Router()

router.get("/getAll", pembayaranController.getAll)
router.get("/getId/:id", pembayaranController.getId)
router.post("/add", pembayaranController.add)
router.delete("/delete/:id", pembayaranController.delete)

module.exports = router