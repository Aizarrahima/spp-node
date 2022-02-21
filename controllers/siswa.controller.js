'use strict'

const db = require('../database')
const bcrypt = require("bcryptjs")

function hashPassword(password) {
    const salt = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(password, salt)
}

module.exports = {
    getAll: (req, res) => {
        db.query(`select * from siswa`, (err, results) => {
            if (err) throw (err)
            res.json({
                message: "Berhasil Menampilkan Semua Data",
                data: results
            })
        })
    },
    getId: (req, res) => {
        let nisn = req.params.nisn
        db.query(`select * from siswa where nisn = '${nisn}'`, (err, results) => {
            if (err) throw (err)
            res.json({
                message: "Berhasil Menampilkan Data",
                data: results
            })
        })
    },
    add: (req, res) => {
        let {
            nisn,
            nis,
            nama,
            id_kelas,
            alamat,
            no_tlp,
            username,
            password,
            level
        } = req.body
        if (!nisn, !nis, !nama, !id_kelas, !alamat, !no_tlp, !username, !password || !level) {
            res.status(402).json({
                message: "Data tidak boleh kosong!"
            })
        }
        return db.query(`insert into siswa set ?`, {
            nisn,
            nis,
            nama,
            id_kelas,
            alamat,
            no_tlp,
            username,
            password: hashPassword(password),
            level
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
        const nisn = req.params.nisn
        let {
            nis,
            nama,
            id_kelas,
            alamat,
            no_tlp,
            username,
            password,
            level
        } = req.body
        if (!nis, !nama, !id_kelas, !alamat, !no_tlp, !username, !password || !level) {
            res.status(402).json({
                message: "Data tidak boleh kosong!"
            })
        }
        return db.query(`update siswa set ? where nisn = '${nisn}'`, {
            nis,
            nama,
            id_kelas,
            alamat,
            no_tlp,
            username,
            password: hashPassword(password),
            level
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
        const nisn = req.params.nisn
        db.query(`delete from siswa where nisn = '${nisn}'`, (err, results) => {
            if (null, err) throw (err)
            res.json({
                message: "Berhasil Hapus Data",
                data: results
            })
        })
    }
}