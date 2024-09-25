const express = require('express');
const { asyncFunction } = require('./amazon');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/run', (req, res) => {
    console.log(req.url);
    const { link } = req.body;

    if (!link) {
        return res.status(400).send('Link is required');
    }
    
    asyncFunction(link).then(result => {    
        console.log(result);
        res.status(200).send(result);
    }).catch(err => {
        console.error(err);
        res.status(500).send('Internal Server Error');
    });
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Server is listening at http://localhost:${port}`);
});