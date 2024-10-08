const {
  getSingers,
  postSinger,
  updateSingers,
  deleteSingers,
  getSingerById
} = require('../controllers/singers')

const singersRoutes = require('express').Router()
singersRoutes.get('/:id', getSingerById)
singersRoutes.get('/', getSingers)
singersRoutes.post('/', postSinger)
singersRoutes.put('/:id', updateSingers)
singersRoutes.delete('/:id', deleteSingers)
module.exports = singersRoutes
