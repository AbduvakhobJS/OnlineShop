const BrandModel = require('../model/brandModel')
const NewClass = require('../class/index')
const path = require('path')
const fs = require('fs');


exports.createImage = async function (req, res, next) {
    const files = req.files;
    const arrayFiles = []
    for (const file of files) {
        const { filename } = file
        arrayFiles.push(filename)
    }
    const user = new BrandModel({
        image: arrayFiles
    })
    user.save()
        .then(() => res.json(user))
        .catch((e) => res.json(e))
}






exports.updateFile = async (req, res, next) => {
    const { id } = req.params

    // 1.eski faylni o'chirish
    const trashFile = await BrandModel.findById(id)
    const trashImage = trashFile.image 
    for(let item of trashImage) {
        const trashPath = path.join(__dirname, `../public/brandImage/${item}`)
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
    const updateFile = await BrandModel.findByIdAndUpdate(id)
    updateFile.image = arrayFiles
    updateFile.save()
        .then(() => {
            res.json(updateFile)
        })
        .catch((e) => {
            res.json(e)
        })
}


exports.getOne = async (req, res, next) => {
    const result = new NewClass(BrandModel, req, res, next)
    result.getOne()
}

exports.getAll = async (req, res, next) => {
    const result = new NewClass(BrandModel, req, res, next)
    result.getAll()
}


exports.deleteFile = async (req, res, next) => {
    const { id } = req.params;
    // 1.eski faylni o'chirish
    const trashFile = await BrandModel.findById(id)
    const trashImage = trashFile.image
    for(let item of trashImage) {
        const trashPath = path.join(__dirname, `../public/brandImage/${item}`)
        fs.unlink(trashPath, function (e) {
            console.log("Fayllar o'chdi")
        })
    }

    // 2.malumotni bazadan o'chirish
    await BrandModel.findByIdAndDelete(id)
    res.json({
        message: "🤣🤣🤣🤣"
    })

}


