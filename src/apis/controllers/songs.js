const Song = require('../models/songs')

const getSongs = async (req, res, next) => {
  try {
    const songs = await Song.find().populate('singer')
    return res.status(200).json(songs)
  } catch (error) {
    return res.status(400).json('error en el controler')
  }
}
const getSongById = async (req, res, next) => {
  try {
    const { id } = req.params
    const songById = await Song.findById(id).populate('singer')
    return res.status(200).json(songById)
  } catch (error) {
    return res.status(400).json('error en el controler')
  }
}
const postSong = async (req, res, next) => {
  try {
    console.log(req.body)
    const newSong = new Song(req.body)
    const songSave = await newSong.save()
    return res.status(201).json(songSave)
  } catch (error) {
    return res.status(400).json('error en el controler')
  }
}
const updateSong = async (req, res, next) => {
  try {
    const { id } = req.params
    const newSong = new Song(req.body)
    newSong._id = id
    const songUpdated = await Song.findByIdAndUpdate(id, newSong, { new: true })
    return res.status(200).json(songUpdated)
  } catch (error) {
    return res.status(400).json('error en el controler')
  }
}
const deleteSong = async (req, res, next) => {
  try {
    const { id } = req.params
    const songDeleted = await Song.findByIdAndDelete(id)
    return res
      .status(200)
      .json({ message: 'Cancion borrada', Element: songDeleted })
    // return res.status(200).json(songDeleted)
  } catch (error) {
    return res.status(400).json('error en el controler')
  }
}
module.exports = {
  getSongs,
  getSongById,
  postSong,
  updateSong,
  deleteSong
}
