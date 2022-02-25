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

router.get("/admin/getAll", checkTokenAdmin, pembayaranController.getAll)
router.get("/petugas/getAll", checkTokenPetugas, pembayaranController.getAll)
router.get("/getId/:id", checkTokenAdmin, pembayaranController.getId)
router.post("/admin/add", checkTokenAdmin, pembayaranController.add)
router.post("/petugas/add", checkTokenPetugas, pembayaranController.add)
router.delete("/delete/:id", checkTokenAdmin, pembayaranController.delete)

module.exports = router