const { getAll, create, remove } = require('../controllers/productImg.controller');
const express = require('express');
const { verifyJWT } = require('../utils/verifyJWT');

const routerProductImg = express.Router();

routerProductImg.route('/')
    .get(verifyJWT,getAll)
    .post(verifyJWT,create);

routerProductImg.route('/:id')
    .delete(verifyJWT,remove)

module.exports = routerProductImg;