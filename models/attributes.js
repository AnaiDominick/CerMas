const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const attributesSchema = new Schema({
  color: { type: String, default: "N/A" },
  model: { type: String, default: "N/A" },
  type: { type: String, default: "N/A" }
});

const Attributes = mongoose.model("Attributes", attributesSchema);

module.exports = Attributes;
