'use strict'

const db = require('../database')

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
        let petugas = {
            username: req.body.username,
            password: req.body.password,
            nama_petugas: req.body.nama_petugas,
            level: req.body.level
            // if(level === "petugas" || level === "admin") {
                
            // }
        }
        db.query(`insert into petugas set ?`, petugas, (err, results) => {
            if (null, err) throw (err)
            res.json({
                message: "Berhasil Menambahkan Data",
                data: petugas
            })
            console.log("Berhasil menambahkan data", results)
        })
    },
    update: (req, res) => {
        const id = req.params.id
        let petugas = {
            username: req.body.username,
            password: req.body.password,
            nama_petugas: req.body.nama_petugas,
            level: req.body.level
        }
        db.query(`update petugas set ? where id_petugas = '${id}'`, petugas, (err, results) => {
            if (null, err) throw (err)
            res.json({
                message: "Berhasil Update Data",
                data: petugas
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
    }
}