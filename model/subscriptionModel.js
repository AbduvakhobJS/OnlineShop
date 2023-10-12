const mongoose = require("mongoose");
const DefaultSchema = mongoose.Schema({
    email: { type: String, required: true },
    date: { type: Date, default: Date.now() },
})
module.exports = mongoose.model("subscription", DefaultSchema)