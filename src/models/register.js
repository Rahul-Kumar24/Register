const mongoose = require("mongoose");
const joi = require("joi");
const joiObjectid = require("joi-objectid");

const employeeSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  //   lastname: {
  //     type: String,
  //     required: true,
  //   },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 5,
    maxlength: 255,
  },
  retypeemail: {
    type: String,
    require: true,
    unique: true,
    minlength: 5,
    maxlength: 255,
  },
  //   phone: {
  //     type: Number,
  //     require: true,
  //     unique: true,
  //   },
  //   age: {
  //     type: Number,
  //     require: true,
  //   },
  password: {
    type: String,
    required: true,
  },
  copassword: {
    type: String,
    required: true,
  },
});


// now we need to create a colleactions

const Register = new mongoose.model("Register", employeeSchema);
module.exports = Register;

