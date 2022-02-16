'use strict'

const db = require('../database')

module.exports = {
    getAll: (req, res) => {
        const sql = 'select * from kelas'
        db.query(sql, (err, results) => {
            if (err) throw (err)
            res.json({
                message: "Berhasil Menampilkan Semua Data",
                data: results
            })
        })
    },
    getId: (req, res) => {
        const id = req.params.id
        db.query(`select * from kelas where id_kelas = '${id}'`, (err, results) => {
            if (err) throw (err)
            res.json({
                message: "Berhasil Menampilkan Data",
                data: results
            })
        })
    },
    add: (req, res) => {
        let kelas = {
            nama_kelas: req.body.nama_kelas,
            jurusan: req.body.jurusan,
            angkatan: req.body.angkatan
        }
        db.query(`insert into kelas set ?`, kelas, (err, results) => {
            if (null, err) throw (err)
            res.json({
                message: "Berhasil Menambahkan Data",
                data: kelas
            })
            console.log("Berhasil menambahkan data", results)
        })
    },
    update: (req, res) => {
        const id = req.params.id
        let kelas = {
            nama_kelas: req.body.nama_kelas,
            jurusan: req.body.jurusan,
            angkatan: req.body.angkatan
        }
        db.query(`update kelas set ? where id_kelas = '${id}'`, kelas, (err, results) => {
            if (null, err) throw (err)
            res.json({
                message: "Berhasil Update Data",
                data: kelas
            })
            console.log("Berhasil update data", results)
        })
    },
    delete: (req, res) => {
        const id = req.params.id
        db.query(`delete from kelas where id_kelas = '${id}'`, (err, results) => {
            if (null, err) throw (err)
            res.json({
                message: "Berhasil Hapus Data",
                data: results
            })
        })
    }
}