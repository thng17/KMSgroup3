import express = require('express')
import data from '../src/data.json'
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('getAll', (req, res) => {
    res.send()
} )

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
