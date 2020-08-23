const mongoose = require('mongoose')
const DATABASE = "mongodb+srv://test:test@cluster0.qtumm.mongodb.net/testql?retryWrites=true&w=majority"

mongoose.connect(DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})

mongoose.connection.on('error', (err) => {
    console.log('Mongoose connection error ' + err.message)
})

mongoose.connection.once('open', () => {
    console.log("MongoDB connected!")
})