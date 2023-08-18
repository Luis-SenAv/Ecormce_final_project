const express = require('express');
const routerUser = require('./user.route');
const routerCategory = require('./category.route');
const routerProduct = require('./product.router');
const routerProductImg = require('./productImg.route');
const router = express.Router();

router.use('/users',routerUser)
router.use('/categories',routerCategory)
router.use('/products',routerProduct)
router.use('/imagesProduct',routerProductImg)


module.exports = router;