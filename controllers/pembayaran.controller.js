'use strict'

const db = require('../database')
let moment = require('moment');

module.exports = {
    add: (req, res) => {
        let now = moment().format();
        // var now = new Date();
        // var jsonDate = now.toJSON();
        // var then = new Date(jsonDate);
        // // console.log(now);
        // // var durasi = req.body.durasi;
        // var bayar = new Date(
        //     now.getFullYear(),
        //     now.getMonth(),
        //     then.getDate()
        // );
        let data_transaksi = {
            id_petugas: req.body.id_petugas,
            nisn: req.body.nisn,
            id_spp: req.body.id_spp,
            tgl_bayar: now,
            bulan_spp: req.body.bulan_spp,
            tahun_spp: req.body.tahun_spp
        };
        db.query(`insert into pembayaran set ?`, data_transaksi, (err, results) => {
            if (null, err) throw (err)
            res.json({
                message: "Berhasil Menambahkan Data",
                data: data_transaksi
            })
        })
    },
    delete: (req, res) => {
        const id = req.params.id
        db.query(`delete from pembayaran where id_pembayaran = '${id}'`, (err, results) => {
            if (null, err) throw (err)
            res.json({
                message: "Berhasil Hapus Data",
                data: results
            })
        })
    },
    getAll: (req, res) => {
        db.query(`select * from pembayaran`, (err, results) => {
            if (err) throw (err)
            res.json({
                message: "Berhasil Menampilkan Semua Data",
                data: results
            })
        })
    },
    getId: (req, res) => {
        const id = req.params.id
        db.query(`select * from pembayaran where id_pembayaran = '${id}'`, (err, results) => {
            if (null, err) throw (err)
            res.json({
                message: "Berhasil Menampilkan Data",
                data: results
            })
        })
    }
}