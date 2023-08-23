const Cart = require("./Cart");
const Category = require("./Category");
const Product = require("./Product");
const ProducImg = require("./ProductImg");
const Purchase = require("./Purchase");
const User = require("./User");
require('../models')


Product.belongsTo(Category)
Category.hasMany(Product)


ProducImg.belongsTo(Product)
Product.hasMany(ProducImg)

// Cart--> userId
Cart.belongsTo(User)
Cart.belongsTo(Product)

// Cart--> productId
Cart.belongsTo(Product)
Product.hasMany(Cart)

// Purchase--> userId
Purchase.belongsTo(User)
User.hasMany(Purchase)

// Purchase--> productId
Purchase.belongsTo(Product)
Product.hasMany(Purchase)
