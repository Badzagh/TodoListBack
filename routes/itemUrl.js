const express = require("express");
const itemUrl = express.Router();

const itemsController = require('../controllers/item.controller');

itemUrl.get('/', itemsController.getAllItems);

itemUrl.get('/choose', itemsController.getChoosenPageItems);

itemUrl.post('/add', itemsController.addItems);

itemUrl.put('/change/:id', itemsController.changeItems);

itemUrl.delete('/delete/:id', itemsController.deleteItems);

module.exports = itemUrl;