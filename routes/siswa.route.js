'use strict'

const express = require("express")
const siswaController = require('../controllers/siswa.controller')
const router = new express.Router()
const {
    checkTokenAdmin
} = require("../auth/token-admin")

router.get("/getAll", checkTokenAdmin, siswaController.getAll)
router.get("/getId/:nisn", checkTokenAdmin, siswaController.getId)
router.post("/add", checkTokenAdmin, siswaController.add)
router.put("/update/:nisn", checkTokenAdmin, siswaController.update)
router.delete("/delete/:nisn", checkTokenAdmin, siswaController.delete)

module.exports = router