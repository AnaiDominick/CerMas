const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const csvSchema = new Schema({}, { "strict": false });

const Csv = mongoose.model("Csv", csvSchema);

module.exports = Csv;
