var path = require('path');
const express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const dotenv = require('dotenv');

const app = express();
app.use(cors());
// to use json
app.use(bodyParser.json());
// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}));

dotenv.config();
const apiKey = process.env.API_KEY;

app.use(express.static('dist'));

const projectData = {};

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
});

app.get('/apiKey', function (req, res) {
  res.json(apiKey);
});

app.post('/addData', addData);

function addData(req, res) {

}

// designates what port the app will listen to for incoming requests
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});