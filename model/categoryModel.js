const mongoose = require("mongoose");
const DefaultSchema = mongoose.Schema({
    name: { type: String, required: true },
    date: { type: Date, default: Date.now() },
})
module.exports = mongoose.model("category", DefaultSchema)