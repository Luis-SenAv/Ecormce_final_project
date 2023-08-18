const Category = require("./Category");
const Product = require("./Product");
const ProducImg = require("./ProductImg");
const User = require("./User");
require('../models')


Product.belongsTo(Category)
Product.belongsToMany(ProducImg,{through:'ProductsProductImgs'})
ProducImg.belongsTo(Product)
