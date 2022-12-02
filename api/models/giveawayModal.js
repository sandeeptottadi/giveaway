const mongoose = require("mongoose");

var stepsSchema = new mongoose.Schema({
  type: String,
  action: String,
  title: String,
  url: String,
  tweet: String,
});

const giveawaySchema = mongoose.Schema({
  id: { type: String },
  uid: {type: String},
  giveaway_name: { type: String, required: true },
  description: { type: String, required: true },
  rules: { type: String },
  start_date: { type: String, required: true },
  end_date: { type: String, required: true },
  category: { type: String, required: true },
  steps: [stepsSchema],
  prizes: [{ name: String, value: String }],
  image: { type: String, required: true },
});
module.exports = mongoose.model("giveaway", giveawaySchema);
