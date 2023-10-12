const NewsModel = require('../model/newsModel')
const path = require('path')
const fs = require('fs')
const newsModel = require('../model/newsModel')
const NewClass = require('../class/index')


// Bitta fayl bilan ishlash
exports.createImage = async function (req, res, next) {
    const files = req.files;
    const arrayFiles = []
    for (const file of files) {
        const { filename } = file
        arrayFiles.push(filename)
    }
    const { title, description, sitata } = req.body
    const user = new NewsModel({
        title: title,
        description: description,
        sitata: sitata,
        image: arrayFiles
    })
    user.save()
        .then(() => res.json(user))
        .catch((e) => res.json(e))
}



exports.updateFile = async (req, res, next) => {
    const { id } = req.params
    const {title, description, sitata} = req.body

    // 1.eski faylni o'chirish
    const trashFile = await NewsModel.findById(id)
    const trashImage = trashFile.image 
    for(let item of trashImage) {
        const trashPath = path.join(__dirname, `../public/image/${item}`)
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
    const updateFile = await NewsModel.findByIdAndUpdate(id)
    updateFile.image = arrayFiles
    updateFile.title = title
    updateFile.description = description
    updateFile.sitata = sitata
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
    const trashFile = await NewsModel.findById(id)
    const trashImage = trashFile.image
    for(let item of trashImage) {
        const trashPath = path.join(__dirname, `../public/image/${item}`)
        fs.unlink(trashPath, function (e) {
            console.log("Fayllar o'chdi")
        })
    }

    // 2.malumotni bazadan o'chirish
    await NewsModel.findByIdAndDelete(id)
    res.json({
        message: "🤣🤣🤣🤣"
    })

}

exports.views_one = async (req, res, next) => {
    const result = await NewsModel.findByIdAndUpdate(req.params.id)
    result.views = result.views += 1
    result.save()
    res.json(result)
    
}

exports.getOne = async (req, res, next) => {
    const result = new NewClass(NewsModel, req, res, next)
    result.getOne()
}

exports.getAll = async (req, res, next) => {
    const result = new NewClass(NewsModel, req, res, next)
    result.getAll()
}




