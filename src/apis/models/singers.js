const mongoose = require('mongoose')
const singerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    country: { type: String, required: true, trim: true },
    dateOfBirth: { type: Date, required: true }
  },
  {
    timestamps: true,
    collection: 'singers'
  }
)
const Singer = mongoose.model('singers', singerSchema, 'singers')
module.exports = Singer
