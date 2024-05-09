const Form = require('../models/formModel');

// Controller action to fetch all form data
exports.getAllForms = async (req, res) => {
  try {
    const forms = await Form.find();
    res.status(200).json(forms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller action to fetch form data by ID
exports.getFormById = async (req, res) => {
  const { id } = req.params;
  try {
    const form = await Form.findById(id);
    if (!form) {
      return res.status(404).json({ message: 'Form not found' });
    }
    res.status(200).json(form);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new form entry
exports.createForm = async (req, res) => {
  try {
    const formData = req.body;
    const newForm = await Form.create(formData);
    res.status(201).json(newForm);
    console.log(newForm)
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update an existing form entry
exports.updateForm = async (req, res) => {
  try {
    const { id } = req.params;
    const formData = req.body;
    const updatedForm = await Form.findByIdAndUpdate(id, formData, { new: true });
    if (!updatedForm) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.status(200).json(updatedForm);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a form entry
exports.deleteForm = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedForm = await Form.findByIdAndDelete(id);
    if (!deletedForm) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.status(200).json({ message: 'Employee deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
