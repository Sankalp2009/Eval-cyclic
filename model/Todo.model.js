const mongoose = require("mongoose");

const todoSchema = mongoose.Schema(
  {
    taskname: String,
    status: String,
    tag: String,
  },
  {
    timestamps: true,
  }
);

const Todo= mongoose.model("Todo", todoSchema);

module.exports = {
  Todo,
};
