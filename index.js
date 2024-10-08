require('dotenv').config()
const express = require('express')
const { connectDB } = require('./src/config/db')
const songsRouter = require('./src/apis/routes/songs')
const singersRoutes = require('./src/apis/routes/singers')
const app = express()
connectDB()
app.use(express.json())
app.use('/api/v1/songs', songsRouter)
app.use('/api/v1/singers', singersRoutes)
app.use('*', (req, res, next) => {
  return res.status(400).json('Route not found')
})
app.listen(3000, () => {
  console.log('Servidor levantado en http://localhost:3000 😊')
})
