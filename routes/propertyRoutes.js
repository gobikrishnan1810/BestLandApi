const express = require('express');
const { addProperty, getProperties, getPropertyById, updateProperty, deleteProperty } = require('../controllers/propertyController');
const { protect, authorize } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/')
  .post(protect, authorize('seller'), addProperty)
  .get(getProperties);

router.route('/:id')
  .get(getPropertyById)
  .put(protect, authorize('seller'), updateProperty)
  .delete(protect, authorize('seller'), deleteProperty);

module.exports = router;