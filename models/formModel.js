const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
    match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
  },
  mobile: {
    type: String,
    required: true,
    trim: true,
    match: /^[0-9]{10}$/,
  },
  designation: {
    type: String,
    required: true,
    enum: ["HR", "Manager", "Sales"],
  },
  gender: {
    type: String,
    required: true,
    enum: ["male", "female"],
  },
  course: [
    {
      type: String,
      enum: ["MCA", "BCA", "BSC"],
    },
  ],
  image: {
    type: String,
    required: true,
  },
  createdDate: {
    type: Date,
    default: Date.now
  }
});

const Form = mongoose.model("Form", formSchema);

module.exports = Form;

