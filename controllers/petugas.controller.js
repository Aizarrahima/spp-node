'use strict'

const db = require('../database')
const bcrypt = require("bcryptjs")

function hashPassword(password) {
    const salt = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(password, salt)
}

module.exports = {
    getAll: (req, res) => {
        db.query(`select * from petugas`, (err, results) => {
            if (err) throw (err)
            res.json({
                message: "Berhasil Menampilkan Semua Data",
                data: results
            })
        })
    },
    getId: (req, res) => {
        const id = req.params.id
        db.query(`select * from petugas where id_petugas = '${id}'`, (err, results) => {
            if (err) throw (err)
            res.json({
                message: "Berhasil Menampilkan Data",
                data: results
            })
        })
    },
    add: (req, res) => {
        let {
            username,
            password,
            nama_petugas,
            level,
        } = req.body
        if (!username, !password, !nama_petugas || !level) {
            res.status(402).json({
                message: "Nama Petugas, Username, Level dan Password Harus Diisi!"
            })
        }
        return db.query(`insert into petugas set ?`, {
            username,
            password: hashPassword(password),
            nama_petugas,
            level,
        }, (err, results) => {
            if (null, err) throw (err)
            res.json({
                message: "Berhasil Menambahkan Data",
                data: results
            })
            console.log("Berhasil menambahkan data", results)
        })
    },
    update: (req, res) => {
        const id = req.params.id
        let {
            username,
            password,
            nama_petugas,
            level
        } = req.body
        db.query(`update petugas set ? where id_petugas = '${id}'`, {
            username,
            password: hashPassword(password),
            nama_petugas,
            level,
        }, (err, results) => {
            if (null, err) throw (err)
            res.json({
                message: "Berhasil Update Data",
                data: results
            })
            console.log("Berhasil update data", results)
        })
    },
    delete: (req, res) => {
        const id = req.params.id
        db.query(`delete from petugas where id_petugas = '${id}'`, (err, results) => {
            if (null, err) throw (err)
            res.json({
                message: "Berhasil Hapus Data",
                data: results
            })
        })
    },
}