const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const employeeSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    age: Number,
    salary: Number,
    department: String,
  },
  {
    collection: "employees",
  }
);

module.exports = mongoose.model("Employee", employeeSchema);
