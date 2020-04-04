const express = require('express');
const routes = express.Router();
const ProductController = require('./Controller/ProductController');
const UserController = require('./Controller/UserController');
const SearchController = require('./Controller/SearchController')

routes.post("/register-product", ProductController.create);
routes.get("/all-products", ProductController.index);

routes.post('/user', UserController.create);
routes.get('/authenticate', UserController.store)
routes.get('/user', UserController.index);

routes.get('/user-painel', SearchController.index);

module.exports = routes