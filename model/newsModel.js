const mongoose = require("mongoose");
const DefaultSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    sitata: { type: String, required: true },
    views: { type: Number, default: 0 },
    image: [{ type: String, required: true }],
    date: { type: Date, default: Date.now() },
})
module.exports = mongoose.model("news", DefaultSchema)