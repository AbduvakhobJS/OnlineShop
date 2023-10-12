const mongoose = require("mongoose");
const DefaultSchema = mongoose.Schema({
    news_ID: { type: mongoose.Schema.ObjectId, ref: "news", },
    product_ID: { type: mongoose.Schema.ObjectId, ref: "product", },
    username: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    date: { type: Date, default: Date.now() },
})
module.exports = mongoose.model("comment", DefaultSchema)