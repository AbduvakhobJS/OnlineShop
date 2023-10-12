const mongoose = require("mongoose");
const DefaultSchema = mongoose.Schema({
    comment_ID: { type: mongoose.Schema.ObjectId, ref: "comment", required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    date: { type: Date, default: Date.now() },
})
module.exports = mongoose.model("reply", DefaultSchema)