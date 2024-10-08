const {
  getSongs,
  postSong,
  updateSong,
  deleteSong,
  getSongById
} = require('../controllers/songs')

const songsRouter = require('express').Router()
songsRouter.get('/:id', getSongById)
songsRouter.get('/', getSongs)
songsRouter.post('/', postSong)
songsRouter.put('/:id', updateSong)
songsRouter.delete('/:id', deleteSong)
module.exports = songsRouter
