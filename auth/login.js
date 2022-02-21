'use strict'
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const db = require("../database")

module.exports = {
    login: (req, res) => {
        const {
            username,
            password,
            level
        } = req.body
        if (!username, !level || !password) res.status(402).json({
            message: 'username, level dan password harus diisi.'
        })
        return db.query('select * from petugas where username = ?', username, (err, result) => {
            if (err) {
                return req.status(500).json({
                    err
                })
            }
            const user = result[0]
            if (typeof user === 'undefined') {
                return res.status(401).json({
                    message: 'user tidak ditemukan'
                })
            }
            if (!bcrypt.compareSync(password, user.password)) {
                return res.status(401).json({
                    message: 'username dan password tidak sesuai'
                })
            } else {
                if (result[0].level === "admin") {
                    const secretAdmin = '#$@^%$^%*&%$$@&'
                    const token = jwt.sign({
                        data: user
                    }, secretAdmin)
                    return res.json({
                        message: "Berhasil Login sebagai Admin! Silahkan menggunakan token dibawah ini : ",
                        token
                    })
                } else if (result[0].level === "petugas") {
                    const secretPetugas = '%$&*&$*$*$*(*'
                    const token = jwt.sign({
                        data: user
                    }, secretPetugas)
                    return res.json({
                        message: 'Berhasil Login sebagai Petugas! Silahkan menggunakan token dibawah ini : ',
                        token
                    })
                }
            }
        })
    },
}