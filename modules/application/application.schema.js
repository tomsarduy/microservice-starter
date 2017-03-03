const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const applicationSchema = new Schema({
  productId: { type: String },
  metadata: {},
  applicant: {
    email: { type: String, unique: true },
    firstName: String,
    lastName: String,
    relationship: String
  },
  createdAt: Date,
  updatedAt: Date
});

module.exports = mongoose.model('Application', applicationSchema);
