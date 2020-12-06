const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bodyParser = require("body-parser");

const feedSchema = new Schema({
  txtName: {
    type: String,
    required: true,
  },
  txtEmail: {
    type: String,
    required: true,
  },
  txtPhone: {
    type: String,
    required: true,
  },
  txtMsg: {
    type: String,
    required: true,
  },
});

const Feedback = mongoose.model("Feedback", feedSchema);
module.exports = Feedback;
