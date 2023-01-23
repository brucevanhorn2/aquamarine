const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');

app.use('/static', express.static('static'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/static/index.html');
});

app.get('/api/v1/switch', (req, res) => {
    let rawState = fs.readFileSync('state.json');
    let state = JSON.parse(rawState);
    res.setHeader('Content-Type', 'application/json');
    res.end(rawState);
});

app.put('/api/v1/switch', (req, res) => {
    let rawState = fs.readFileSync('state.json');
    let state = JSON.parse(rawState);
    if(state.current === 'green'){
        state.current = 'blue';
    } else {
        state.current = 'green';
    }
    fs.writeFileSync('state.json', JSON.stringify(state));
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(state));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});