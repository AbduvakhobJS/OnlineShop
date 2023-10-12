const CategoryModel = require('../model/categoryModel')
const mongoose = require('mongoose')
const NewClass = require('../class/index')

exports.category = async (req, res, next) => {
    const { name } = req.body

    const result = new CategoryModel({
        name: name
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
    const result = new NewClass(CategoryModel, req, res, next)
    result.getOne()
}

exports.getAll = async (req, res, next) => {
    const result = new NewClass(CategoryModel, req, res, next)
    result.getAll()
}


exports.update = async (req, res, next) => {
    const { id } = req.params
    const { name } = req.body

    const updateFile = await CategoryModel.findByIdAndUpdate(id)
    updateFile.name = name

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
        const updateFile = await CategoryModel.findByIdAndDelete(id)
        res.json({
            message: "Malumot o'chdi 👌👌👌"
        })
    }
    catch (error) {
        res.json(error)
    }
}



