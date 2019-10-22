const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const trophySchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    date: {type: Date},
    awarded: { type: Boolean, default: false }
});

const Trophy = mongoose.model("Trophy", trophySchema);

module.exports = Trophy;