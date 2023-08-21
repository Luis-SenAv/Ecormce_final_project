const express = require('express');
const routerUser = require('./user.route');
const routerCategory = require('./category.route');
const routerProduct = require('./product.router');
const routerProductImg = require('./productImg.route');
const routerCart = require('./cart.route');
const { verifyJWT } = require('../utils/verifyJWT');
const routerPurchase = require('./purchase.route');
const router = express.Router();

router.use('/users',routerUser)
router.use('/categories',routerCategory)
router.use('/products',routerProduct)
router.use('/product_images',routerProductImg)
router.use('/cart',verifyJWT,routerCart)
router.use('/purchases',verifyJWT,routerPurchase)
module.exports = router;