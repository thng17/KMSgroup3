import express = require('express')
import data from '../src/data.json'
export const app = express();
app.use(express.urlencoded({
    extended: true
}))
const port = 3000


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/all', (req, res) => {
    res.send(data);
    res.sendStatus(200);
} )

app.use(express.json)
