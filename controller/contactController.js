const mongoose = require('mongoose')
const ContactModel = require('../model/contactModel')
const NewClass = require('../class/index')


exports.createContact = async  (req, res, next) => {
    const { name, email, message, status} = req.body
    const result = new ContactModel({
        name: name,
        email: email,
        message: message,
        status: status
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
    const result = new NewClass(ContactModel, req, res, next)
    result.getOne()
}

exports.getAll = async (req, res, next) => {
    const result = new NewClass(ContactModel, req, res, next)
    result.getAll()
}


exports.update = async (req, res, next) => {
    const { id } = req.params
    const {name, email , message} = req.body

    const updateFile = await ContactModel.findByIdAndUpdate(id)
    updateFile.name = name
    updateFile.email = email
    updateFile.message = message

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
        const updateFile = await ContactModel.findByIdAndDelete(id)
        res.json({
            message: "Malumot o'chdi 👌👌👌"
        })
    }
    catch (error) {
        res.json(error)
    }
}
