// formValidation.js

const { body } = require("express-validator");

exports.validateFormData = [
  body("name").trim().notEmpty().withMessage("Name is required"),
  body("email").trim().isEmail().withMessage("Invalid email format"),
  body("mobile")
    .trim()
    .isMobilePhone()
    .withMessage("Invalid mobile number format"),
  body("designation")
    .trim()
    .notEmpty()
    .isIn(["HR", "Manager", "Sales"])
    .withMessage("Invalid designation"),
  body("gender")
    .trim()
    .notEmpty()
    .isIn(["male", "female"])
    .withMessage("Invalid gender"),
  body("course")
    .isArray({ min: 1 })
    .withMessage("At least one course must be selected"),
  body("image").trim().notEmpty().withMessage("Image is required"),
];
