const mongoose = require("mongoose");
const { Schema } = mongoose;

const Schema = new Schema({
  name: String
});

mongoose.model("Model", Schema);
