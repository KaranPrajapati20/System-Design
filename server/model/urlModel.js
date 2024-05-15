const mongoose = require("mongoose");

const UrlSchema = new mongoose.Schema({
    fullUrl: {
        type: String,
        required: true,
        unique: true
    },
    shortUrl: {
        type: String,
        required: true,
        unique: true
    },
    clicks: {
        type: Number,
        default: 0,
    },
}, {
    timestamps: true
});

const Url = mongoose.model("Url", UrlSchema);

module.exports = {
    Url
};
