const express = require('express')
const app = express()
const router = express.Router()
const path = require('path')

app.get('/', (req, res, next) => {
    return res.status(200).json({"message": "ok"})
})


app.listen(3000, () => {
    console.log("APP Iniciou, ouvindo na porta 3000!")
})
