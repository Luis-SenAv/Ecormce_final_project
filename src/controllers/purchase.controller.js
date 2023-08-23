const catchError = require('../utils/catchError');
const Purchase = require('../models/Purchase');
const Cart = require('../models/Cart');
const Product = require('../models/Product');
const Category = require('../models/Category');
const User = require('../models/User');

const getAll = catchError(async(req, res) => {
    const results = await Purchase.findAll({where:{userId:req.user.id},
        include:[
            {
                model:Product,
                attributes:{exclude:["createAt","updateAt"]},
                include:[{
                    model:Category                    
                }
                ]
            }]});
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const userId=req.user.id
    const cart=await Cart.findAll({
        where:{userId},
        raw:true,
        attributes:['quantity','userId','productId']
    })

    console.log(cart)
    const result = await Purchase.bulkCreate(cart);
    return res.status(201).json(result);
});

module.exports = {
    getAll,
    create
}