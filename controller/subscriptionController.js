const SubscriptionModel = require('../model/subscriptionModel')
const mongoose = require('mongoose')
const NewClass = require('../class/index')

exports.subscription = async (req, res, next) => {
    const { email } = req.body

    const result = new SubscriptionModel({
        email: email
    })
    await result.save()
    .then(() => {
        res.json(result)
    })
    .catch((e) => {
        res.json(e)
    })
}


exports.getOne = async (req, res, next) => {
    const result = new NewClass(SubscriptionModel, req, res, next)
    result.getOne()
}

exports.getAll = async (req, res, next) => {
    const result = new NewClass(SubscriptionModel, req, res, next)
    result.getAll()
}


exports.update = async (req, res, next) => {
    const { id } = req.params
    const { email } = req.body

    const updateFile = await SubscriptionModel.findByIdAndUpdate(id)
    updateFile.email = email

    updateFile.save()
    .then(() => {
        res.json(updateFile)
    })
    .catch((e) => {
        res.json(e)
    })
}

exports.delete = async (req, res, next) => {
    const { id } = req.params

    try {
        const updateFile = await SubscriptionModel.findByIdAndDelete(id)
        res.json({
            message: "Malumot o'chdi 👌👌👌"
        })
    }
    catch (error) {
        res.json(error)
    }
}
