'use strict'

const db = require('../database')

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
        let siswa = {
            nisn: req.body.nisn,
            nis: req.body.nis,
            nama: req.body.nama,
            id_kelas: req.body.id_kelas,
            alamat: req.body.alamat,
            no_tlp: req.body.no_tlp,
            username: req.body.username,
            password: req.body.password,
            level: req.body.level
        }
        db.query(`insert into siswa set ?`, siswa, (err, results) => {
            if (null, err) throw (err)
            res.json({
                message: "Berhasil Menambahkan Data",
                data: siswa
            })
            console.log("Berhasil menambahkan data ", results)
        })
    },
    update: (req, res) => {
        let nisn = req.params.nisn
        let siswa = {
            nis: req.body.nis,
            nama: req.body.nama,
            id_kelas: req.body.id_kelas,
            alamat: req.body.alamat,
            no_tlp: req.body.no_tlp,
            username: req.body.username,
            password: req.body.password,
            level: req.body.level
        }
        db.query(`update siswa set ? where nisn = '${nisn}'`, siswa, (err, results) => {
            if (null, err) throw (err)
            res.json({
                message: "Berhasil Update Data",
                data: siswa
            })
            console.log("Berhasil update data ", results)
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