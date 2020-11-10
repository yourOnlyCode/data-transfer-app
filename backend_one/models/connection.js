const mongoose = require('mongoose')

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost/data-transfer'

mongoose.connect(connectionString)
    .then(() => {
        console.log('successfully connected to mongoose SERVER ONE')
    })
    .catch((err) => {
        console.log(err)
        console.log('failed to connect to mongoose SERVER ONE')
    })

module.exports = mongoose