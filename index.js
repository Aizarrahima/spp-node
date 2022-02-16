// inisialisasi
const express = require("express")

// implementasi
const app = express()
app.use(express.json());

// connection to database
const db = require('./database')
db.connect((error) => {
    if (error) throw error
    console.log("Mysql Connected")
})

// endpoint
app.get("/", (req, res) => {
    res.send({
        message: "Berhasil menjalankan GET",
        data: {
            description: "Endpoint ini untuk menampilkan data"
        }
    })
})

app.use("/kelas", require('./routes/kelas.route'))
app.use("/petugas", require('./routes/petugas.route'))
app.use("/spp", require('./routes/spp.route'))
app.use("/siswa", require('./routes/siswa.route'))
app.use("/pembayaran", require('./routes/pembayaran.route'))

const port = 8000
app.listen(port, () => console.log(`App running ${port}`))