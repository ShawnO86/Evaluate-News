var path = require('path');
const express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const dotenv = require('dotenv');
//I've used Node version - 18.13.0 - for any dependancy issues!!!

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
//API_KEY must be defined in project root within .env file!

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
  console.log(req.body)
  projectData.text = req.body.text
  projectData.agreement = req.body.agreement
  projectData.confidence = req.body.confidence
  projectData.irony = req.body.irony
  projectData.subjectivity = req.body.subjectivity
});

app.listen(3000, function () {
    console.log('Meaning cloud API app listening on port 3000!')
});