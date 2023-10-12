const CartModel = require('../model/cartModel')
const mongoose = require('mongoose')
const NewClass = require('../class/index')


exports.createCart = async (req, res, next) => {
    const { product_ID, user_ID } = req.body
    const result = new CartModel({
        product_ID: product_ID,
        user_ID: user_ID
    })

    await result.save()
    .then(() => {
        res.json(result)
    })
    .catch((e) => {
        res.json(e)
    })
}

// exports.getOne = async (req, res, next) => {
//     const result = await CartModel.findById(req.params.id).sort({ createdAt: -1 }).populate([...populate])

//     await result.save()
//     .then(() => {
//         res.json(result)
//     })
//     .catch((e) => {
//         res.json(e)
//     })
// }

exports.getOne = async (req, res, next) => {
    const result = new NewClass(CartModel, req, res, next)
    result.getOne()
}

exports.getAll = async (req, res, next) => {
    const result = new NewClass(CartModel, req, res, next)
    result.getAll()
}


exports.deleteOne = async (req, res, next) => {
    const result = new NewClass(CartModel, req, res, next)
    result.deleteOne()
}
