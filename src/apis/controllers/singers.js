const Singer = require('../models/singers')

const getSingers = async (req, res, next) => {
  try {
    const singers = await Singer.find()
    return res.status(200).json(singers)
  } catch (error) {
    return res.status(400).json('error en el controler')
  }
}
const getSingerById = async (req, res, next) => {
  try {
    const { id } = req.params
    const singerById = await Singer.findById(id)
    return res.status(200).json(singerById)
  } catch (error) {
    return res.status(400).json('error en el controler')
  }
}
const postSinger = async (req, res, next) => {
  try {
    const newSinger = new Singer(req.body)
    const singerSave = await newSinger.save()
    return res.status(201).json(singerSave)
  } catch (error) {
    return res.status(400).json('error en el controler')
  }
}
const updateSingers = async (req, res, next) => {
  try {
    const { id } = req.params
    const newSinger = new Singer(req.body)
    newSinger._id = id
    const singerUpdate = await Singer.findByIdAndUpdate(id, newSinger, {
      new: true
    })
    return res.status(200).json(singerUpdate)
  } catch (error) {
    return res.status(400).json('error en el controler')
  }
}
const deleteSingers = async (req, res, next) => {
  try {
    const { id } = req.params
    const singerDeleted = await Singer.findByIdAndDelete(id)
    return res
      .status(200)
      .json({ message: 'Elemento eliminado', Element: singerDeleted })
  } catch (error) {
    return res.status(400).json('error en el controler')
  }
}
module.exports = {
  getSingers,
  getSingerById,
  postSinger,
  updateSingers,
  deleteSingers
}
