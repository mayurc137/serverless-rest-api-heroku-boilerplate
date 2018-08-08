const express = require('express');
const cors = require('cors');

const app = express();


app.set('port', (process.env.PORT || 5000));

app.use(cors({
    origin: true
}));

app.listen(app.get('port'), function () {
    console.log("Node app is running at localhost:" + app.get('port'))
})


// Add middleware to authenticate requests or perform additional tasks

let myMiddleware = (req, res, next) => {
    //authentication code goes here
    next();
}

app.use(myMiddleware);


// build multiple CRUD interfaces:
app.get('/', (req, res) => {
    let response = 'Hello World';
    res.send(response);
});

app.get('/:id', (req, res) => {
    let id = req.params.id;
    //let response;
    res.send(response);
});

app.post('/', (req, res) => {
    let response = 'Hello World';
    res.send(response);
});


app.put('/:id', (req, res) => {
    let id = req.params.id;
    //let response;
    res.send(response);
});

app.delete('/:id', (req, res) => {
    let id = req.params.id;
    //let response;
    res.send(response);
});

