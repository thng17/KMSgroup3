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

app.use(express.json())

app.post('/data', (req, res) => {
    const id = data.exercises.length;
    const title = req.body.title;
    const description = req.body.description;

    data.exercises.push({id, title, description, done : "false"})

    const result = saveData();
    if (result == "saved") {
        res.sendStatus(200);
    } else {
        res.sendStatus(500);
    }
})


app.put('/data', (req, res) => {
    const id = req.body.id;
    const name = req.body.title;
    const desc = req.body.description;

    data.exercises[id].title = name;
    data.exercises[id].description = desc;

    const result = saveData();
    if (result == "saved") {
        res.sendStatus(200);
    } else {
        res.sendStatus(500);
    }
})

function saveData(): string{
    let fs = require('fs');
    fs.writeFile("src/data.json", JSON.stringify(data), function(err) {
        if (err) {
            console.log(err);
            return err;
        }
    });
    return "saved"
}
