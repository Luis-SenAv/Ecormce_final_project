const express = require('express');
const routerUser = require('./user.route');
const router = express.Router();

router.use('/users',routerUser)


module.exports = router;