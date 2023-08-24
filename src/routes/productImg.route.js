const { getAll} = require('../controllers/productImg.controller');
const { create, remove } = require('../controllers/productImgClaudinary.controller');
const express = require('express');
const { verifyJWT } = require('../utils/verifyJWT');
const upload = require('../utils/multer');

const routerProductImg = express.Router();

routerProductImg.route('/')
    .get(verifyJWT,getAll)
    .post(upload.single('image'),create);

routerProductImg.route('/:id')
    .delete(verifyJWT,remove)

module.exports = routerProductImg;