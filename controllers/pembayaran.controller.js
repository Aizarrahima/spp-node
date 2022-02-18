'use strict'

const db = require('../database')
let moment = require('moment');

module.exports = {
    add: (req, res) => {
        var id_petugas = req.body.id_petugas
        var nisn = req.body.nisn
        let now = moment().format();

        db.query(`select * from kelas join siswa  on siswa.id_kelas = kelas.id_kelas where nisn = '${nisn}'`, (err, result) => {
            if (err) {
                throw err
            } else {
                var angkatan = result[0].angkatan
                db.query(`select * from spp where angkatan='${angkatan}'`, (err, hasil) => {
                    if (err) {
                        throw err
                    } else {
                        var idspp = hasil[0].id_spp
                        db.query(`select * from pembayaran where nisn = '${nisn}' ORDER BY tahun_spp DESC, bulan_spp DESC`, (err, results) => {
                            if (err) {
                                throw err
                            } else {
                                var bulan_spp = req.body.bulan
                                var tahun_spp = req.body.tahun
                                if (bulan_spp && tahun_spp) {
                                    var sql = `insert into pembayaran (id_petugas, nisn, id_spp, tgl_bayar, bulan_spp, tahun_spp ) values ('${id_petugas}','${nisn}','${idspp}','${now}','${bulan_spp}','${tahun_spp}')`
                                    db.query(sql, (err, hsl) => {
                                        if (err) throw err
                                        res.json({
                                            message: "Berhasil menambahkan data pembayaran spp",
                                            bulanspp: bulan_spp
                                        })
                                    })
                                } else {
                                    var bulanSpp = results[0].bulan_spp;
                                    var tahunSpp = results[0].tahun_spp;
                                    var bulanspp = 1;
                                    if (bulanSpp < 12) {
                                        bulanspp = bulanSpp + 1;
                                    }
                                    if (bulanSpp >= 12) {
                                        tahunSpp = tahunSpp + 1;
                                    }
                                    var qry = `insert into pembayaran (id_petugas, nisn, id_spp, tgl_bayar, bulan_spp, tahun_spp) values ('${id_petugas}','${nisn}','${idspp}','${now}','${bulanspp}','${tahunSpp}')`
                                    db.query(qry, (err, hsl) => {
                                        if (err) throw err
                                        res.json({
                                            message: "Berhasil menambahkan data pembayaran spp",
                                            bulan_spp: bulanspp

                                        })
                                    })
                                }
                            }
                        })
                    }
                })
            }
        })
    },

    // add: (req, res) => {
    //     let now = moment().format();
    //     // var now = new Date();
    //     // var jsonDate = now.toJSON();
    //     // var then = new Date(jsonDate);
    //     // // console.log(now);
    //     // // var durasi = req.body.durasi;
    //     // var bayar = new Date(
    //     //     now.getFullYear(),
    //     //     now.getMonth(),
    //     //     then.getDate()
    //     // );
    //     let data_transaksi = {
    //         id_petugas: req.body.id_petugas,
    //         nisn: req.body.nisn,
    //         id_spp: req.body.id_spp,
    //         tgl_bayar: now,
    //         bulan_spp: req.body.bulan_spp,
    //         tahun_spp: req.body.tahun_spp
    //     };
    //     db.query(`insert into pembayaran set ?`, data_transaksi, (err, results) => {
    //         if (null, err) throw (err)
    //         res.json({
    //             message: "Berhasil Menambahkan Data",
    //             data: data_transaksi
    //         })
    //     })
    // },

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