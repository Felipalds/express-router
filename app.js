const express = require('express')
const app = express()
const router = express.Router()
const path = require('path')

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'src', 'views', 'produtos', 'produtos.html'))
})


app.listen(3000, () => {
    console.log("APP Iniciou, ouvindo na porta 3000!")
})