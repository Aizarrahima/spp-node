'use strict'

const express = require("express")
const loginController = require("./login")
const router = new express.Router()

router.post("/login", loginController.login)

module.exports = router