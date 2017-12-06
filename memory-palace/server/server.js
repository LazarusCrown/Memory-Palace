const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const nodeController = require('./nodes/nodeController');

const app = express();
const PORT = 8080;
// local host commented out ; online server below for group use
// const mongoURI = process.env.NODE_ENV === 'test' ? 'mongodb://localhost/unit11test' : 'mongodb://localhost/unit11dev';
const mongoURI = 'mongodb://student:ilovetesting@ds133136.mlab.com:33136/palace-db';
mongoose.connect(mongoURI);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../')));

// add new node data to database
app.post('/api', nodeController.createNode, nodeController.getAllNodes, (req, res) => {
  res.status(200);
  res.end();
})
// get all nodes on page load
app.get('/api', nodeController.getAllNodes, (req, res) => {
  console.log('/ get: ', req.body);
  res.contentType('application/json');
  res.status(200);
  res.send(req.body);
  // res.end();
})


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
