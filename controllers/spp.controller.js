'use strict'

const db = require('../database')

module.exports = {
    getAll: (req, res) => {
        db.query(`select * from spp`, (err, results) => {
            if (err) throw (err)
            res.json({
                message: "Berhasil Menampilkan Semua Data",
                data: results
            })
        })
    },
    getId: (req, res) => {
        const id = req.params.id
        db.query(`select * from spp where id_spp = '${id}'`, (err, results) => {
            if (err) throw (err)
            res.json({
                message: "Berhasil Menampilkan Data",
                data: results
            })
        })
    },
    add: (req, res) => {
        let spp = {
            angkatan: req.body.angkatan,
            tahun: req.body.tahun,
            nominal: req.body.nominal
        }
        db.query(`insert into spp set ?`, spp, (err, results) => {
            if (null, err) throw (err)
            res.json({
                message: "Berhasil Menambahkan Data",
                data: spp
            })
            console.log("Berhasil menambahkan data ", results)
        })
    },
    update: (req, res) => {
        const id = req.params.id
        let spp = {
            angkatan: req.body.angkatan,
            tahun: req.body.tahun,
            nominal: req.body.nominal
        }
        db.query(`update spp set ? where id_spp = '${id}'`, spp, (err, results) => {
            if (null, err) throw (err)
            res.json({
                message: "Berhasil Update Data",
                data: spp
            })
            console.log("Berhasil update data ", results)
        })
    },
    delete: (req, res) => {
        const id = req.params.id
        db.query(`delete from spp where id_spp = '${id}'`, (err, results) => {
            res.json({
                message: "Berhasil Hapus Data",
                data: results
            })
        })
    }
}