const mongoose = require("mongoose");
const DefaultSchema = mongoose.Schema({
    user_ID: { type: mongoose.Schema.ObjectId, ref: "user", required: true },
    product_ID: { type: mongoose.Schema.ObjectId, ref: "product", required: true },
    date: { type: Date, default: Date.now() },
})
module.exports = mongoose.model("cart", DefaultSchema)