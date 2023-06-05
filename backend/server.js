//Gömmer känsliga nycklar
import * as dotenv from 'dotenv'
dotenv.config()

import express, { response } from 'express'
import cors from 'cors'
import pg from 'pg'
import pkg from 'pg'
const { Client } = pkg
import bodyParser from 'body-parser'
import path from 'path'

const app = express()

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true
    })
)
app.use(cors())
app.use(express.json())
app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Headers', 'Content-Type')
    next()
})
app.use(express.static(path.join(path.resolve(), 'public')))

//Implementera databas
const db = new Client({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
})

//Errorfunktion för att se att databasen har connectat
db.connect(function (err) {
    if (err) throw err
    console.log('Database connected')
})

//Routes

app.get('/glassarna', async (req, res) => {
    try {
        const glassar = await db.query('SELECT * FROM glassar')
        res.json(glassar.rows)
    } catch (err) {
        console.log(err.message)
    }
})

app.get('/', async (req, res) => {
    try {
        // const glassarna = await db.query(`SELECT * FROM  glassar;`)
        const glassarna = await db.query(`SELECT glassar.id,
        namn,
        smak,
        laktos,
        notter,
        recensent,
        glass_id,
        betyg,
        rec
        FROM
        glassar
        INNER JOIN
        recensioner
        ON recensioner.glass_id = glassar.id
         ORDER BY betyg DESC;`)
        res.json(glassarna.rows)
    } catch (err) {
        console.log(err.message)
    }
})
app.get('/glassar', async (req, res) => {
    try {
        const glassarna = await db.query(`SELECT glassar.id,
        namn,
        smak,
        laktos,
        notter,
        recensent,
        glass_id,
        betyg,
        rec
        FROM
        glassar
        INNER JOIN
        recensioner
        ON recensioner.glass_id = glassar.id
        ORDER BY recensioner.id DESC;`)
        res.json(glassarna.rows)
    } catch (err) {
        console.log(err.message)
    }
})
app.get('/recensioner', async (req, res) => {
    try {
        const recs = await db.query('SELECT * FROM recensioner')
        res.json(recs.rows)
    } catch (err) {
        console.log(err.message)
    }
})

app.post('/recensioner', async (req, res) => {
    const { glass_id, recensent, betyg, rec } = req.body
    const values = [glass_id, recensent, betyg, rec]
    await db.query(
        'INSERT INTO recensioner(glass_id, recensent, betyg, rec) VALUES ($1, $2, $3, $4)',
        values
    )
    res.json('Recension skapad')
})

app.listen(8800, () => {
    console.log('Server is running')
})
