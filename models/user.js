const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    // firstname: { type: String, required: true },
    // lastname: { type: String, required: true },
    // username: { type: String, required: true },
    email: { type: String, required: true },
    posts: { type: Array },
    trophies: { type: Array }
    // password: { type: String, required: true },
    // profilePic: { type: String },
    // aboutMe: { type: String },
    // friendsList: { type: Array }
});

const User = mongoose.model('User', userSchema);

module.exports = User;