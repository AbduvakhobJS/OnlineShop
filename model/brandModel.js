const mongoose = require("mongoose");
const DefaultSchema = mongoose.Schema({
    image: [{ type: String, required: true }],
    date: { type: Date, default: Date.now() },
})
module.exports = mongoose.model("brand", DefaultSchema)