const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

// Configuring server
const app = express();
const port = 3000;
const cardController = require('./controllers/cardController.js');

// App.use setup
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Hosting React site
app.use(express.static(__dirname + '/../../build/'));
app.get('/', (req, res) => { res.sendFile(path.resolve(__dirname, '../../index.html')); });

// Setting up CRUD routes
app.get('/cards', cardController.getCards);
app.post('/cards', cardController.addCard);
app.put('/cards', cardController.updateCard);
app.delete('/cards/:cardId', cardController.deleteCard);

// Starting server
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
