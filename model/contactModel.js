const mongoose = require("mongoose");

const DefaultSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    status: {
        type: String,
        enum: [
            "0", // korilmadi
            "1" // korildi
        ],
        default: "0"
    },
    date: { type: Date, default: Date.now() },
})
module.exports = mongoose.model("contact", DefaultSchema)