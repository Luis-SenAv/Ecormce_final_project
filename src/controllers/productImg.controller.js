const catchError = require('../utils/catchError');
const ProducImg = require('../models/ProductImg');
const fs = require("fs");
const path = require("path")

const getAll = catchError(async(req, res) => {
    const results = await ProducImg.findAll();
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const {filename}=req.file
    const url=`${req.protocol}://${req.headers.host}/uploads/${filename}`
    const result=await ProducImg.create({filename,url})
    
    return res.status(201).json(result)
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await ProducImg.findByPk(id)
    if(!result) return res.sendStatus(404);
    fs.unlinkSync(path.join(__dirname,'..','public','uploads',`${result.filename}`))
    await result.destroy()
    return res.sendStatus(204);
});



module.exports = {
    getAll,
    create,
    remove
}