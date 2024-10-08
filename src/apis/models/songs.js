const mongoose = require('mongoose')
const songSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    singer: {
      type: mongoose.Types.ObjectId,
      ref: 'singers',
      required: false,
      trim: true
    },
    album: { type: String, required: false, trim: true },
    category: {
      type: String,
      enum: ['pop', 'rock', 'rap', 'hiphop', 'classic'],
      required: false
    },
    video: { type: String, required: false, trim: true },
    listPosition: { type: Number, require: false }
  },
  { timestamps: true, collection: 'songs' }
)
const Song = mongoose.model('songs', songSchema, 'songs')
module.exports = Song
