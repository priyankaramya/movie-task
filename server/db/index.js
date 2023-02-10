const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://priyanka:Rage!2023@rageproject.in5gvss.mongodb.net/movie?retryWrites=true&w=majority', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db
