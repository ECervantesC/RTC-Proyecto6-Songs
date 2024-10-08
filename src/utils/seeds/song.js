const mongoose = require('mongoose')
const Song = require('../../apis/models/songs')
const songs = require('../../data/songs')
const lanzarSemilla = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://DB_URL:S4hdLr42vh5Lh8de@cluster0.tf3xr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    )
    console.log('BBDD conectada')
    await Song.collection.drop()
    console.log('BBDD borrada')
    await Song.insertMany(songs)
    console.log('Canciones introducidas')
    await mongoose.disconnect()
    console.log('BBDD desconectada')
  } catch (error) {
    console.log('Error')
  }
}
lanzarSemilla()
