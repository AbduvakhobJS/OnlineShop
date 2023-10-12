const mongoose = require("mongoose");
const DefaultSchema = mongoose.Schema({
    category_ID: { type: mongoose.Schema.ObjectId, ref: "category", required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    image: [{ type: String, required: true }],
    like: { type: Number, default: "0" },
    rating: { type: String, default: "0" },
    date: { type: Date, default: Date.now() },
})
module.exports = mongoose.model("product", DefaultSchema)