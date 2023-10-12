const ProductModel = require('../model/productModel')
const path = require('path')
const fs = require('fs');
const NewClass = require('../class/index');

exports.createImage = async function (req, res, next) {
    const files = req.files;
    const arrayFiles = []
    for (const file of files) {
        const { filename } = file
        arrayFiles.push(filename)
    }
    const { category_ID, name, price, description } = req.body

    const product = new ProductModel({
        category_ID: category_ID,
        name: name,
        description: description,
        price: price,
        image: arrayFiles
    })
    product.save()
        .then(() => res.json(product))
        .catch((e) => res.json(e))
}
exports.updateFile = async (req, res, next) => {
    const { id } = req.params
    const { name, price, description } = req.body

    // 1.eski faylni o'chirish
    const trashFile = await ProductModel.findById(id)
    const trashImage = trashFile.image
    for (let item of trashImage) {
        const trashPath = path.join(__dirname, `../public/productImage/${item}`)
        fs.unlink(trashPath, function (e) {
            console.log("Fayl o'chdi")
        })
    }
    // 2.yangi faylni yuklash

    const files = req.files;
    const arrayFiles = []
    for (const file of files) {
        const { filename } = file
        arrayFiles.push(filename)
    }
    const updateFile = await ProductModel.findByIdAndUpdate(id)
    updateFile.image = arrayFiles
    updateFile.name = name
    updateFile.description = description
    updateFile.price = price

    updateFile.save()
        .then(() => {
            res.json(updateFile)
        })
        .catch((e) => {
            res.json(e)
        })
}
exports.deleteFile = async (req, res, next) => {
    const { id } = req.params;
    // 1.eski faylni o'chirish
    const trashFile = await ProductModel.findById(id)
    const trashImage = trashFile.image
    for (let item of trashImage) {
        const trashPath = path.join(__dirname, `../public/productImage/${item}`)
        fs.unlink(trashPath, function (e) {
            console.log("Fayllar o'chdi")
        })
    }

    // 2.malumotni bazadan o'chirish
    await ProductModel.findByIdAndDelete(id)
    res.json({
        message: "🤣🤣🤣🤣"
    })

}
exports.like_one = async (req, res, next) => {
    const result = await ProductModel.findByIdAndUpdate(req.params.id)
    result.like = result.like += 1
    result.save()
    res.json(result)

}
exports.getOne = async (req, res, next) => {
    const result = new NewClass(ProductModel, req, res, next)
    result.getOne("category_ID")
}

exports.getAll = async (req, res, next) => {
    const result = new NewClass(ProductModel, req, res, next)
    result.getAll("category_ID")
}
