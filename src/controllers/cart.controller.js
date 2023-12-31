const catchError = require('../utils/catchError');
const Cart = require('../models/Cart');
const Product = require('../models/Product');

const getAll = catchError(async(req, res) => {
    const results = await Cart.findAll({where:{userId:req.user.id},include:[Product]});
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const userId=req.user.id
    const {quantity,productId}=req.body
    const body={
        quantity,
        userId,
        productId
    }
    const result = await Cart.create(body);
    return res.status(201).json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Cart.destroy({ where: {id,userId:req.user.id} });
    if(!result) return res.sendStatus(404);
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const {quantity}=req.body
    const result = await Cart.update(
        {quantity},   
        {where: {id,userId:req.user.id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});

module.exports = {
    getAll,
    create,
    remove,
    update
}