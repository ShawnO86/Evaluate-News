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

let projectData = {};

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
});

app.get('/apiKey', function (req, res) {
  res.json(apiKey);
});

app.get('/getData', function sendData(req, res) {
  res.send(projectData)
});

app.post('/addData', function addData(req, res) {
  //build projectdata object here
  console.log(req.body)
  projectData.subjectivity = req.body.subjectivity
  projectData.confidence = req.body.confidence
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});