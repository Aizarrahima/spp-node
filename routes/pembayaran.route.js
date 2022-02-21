'use strict'

const express = require("express")
const pembayaranController = require('../controllers/pembayaran.controller')
const router = new express.Router()
const {
    checkTokenAdmin
} = require("../auth/token-admin")
const {
    checkTokenPetugas
} = require("../auth/token-petugas")

router.get("/admin", checkTokenAdmin, pembayaranController.getAll)
router.get("/petugas", checkTokenPetugas, pembayaranController.getAll)
router.get("/getId/:id", checkTokenAdmin, pembayaranController.getId)
router.post("/admin", checkTokenAdmin, pembayaranController.add)
router.post("/petugas", checkTokenPetugas, pembayaranController.add)
router.delete("/delete/:id", checkTokenAdmin, pembayaranController.delete)

module.exports = router