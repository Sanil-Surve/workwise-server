// formRoutes.js

const express = require("express");
const router = express.Router();
const formController = require("../controllers/formController");
const {
  validateFormData,
} = require("../middlewares/validation/formValidation");

// Route to fetch all form data
router.get('/employees', formController.getAllForms);

// Route to fetch form data by ID
router.get('/employee/:id', formController.getFormById);

// Create a new form entry
router.post("/employee", validateFormData, formController.createForm);

// Update an existing form entry
router.put("/employee/:id", formController.updateForm);

// Delete a form entry
router.delete("/employee/:id", formController.deleteForm);

module.exports = router;
