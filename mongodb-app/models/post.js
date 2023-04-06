const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const postSchema = new Schema({
    postId: { type: Number, required: true, unique: true },
    title: { type: String, trim: true, required: true },
    description: { type: String, trim: true, required: true, unique: true },
    imagePath: { type: String },
    likes: { type: Number },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model("post", postSchema);