const express = require('express')

const dataRouter = require('./controllers/data.js')

const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(express.static(`${__dirname}/client/build`))
app.use(express.static(`${__dirname}/client/public`))

app.use('/api/data', dataRouter)

app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
})

const PORT = process.env.PORT || 3001

app.listen(PORT, (req, res) => {
    console.log(`Application started on port ${PORT}`)
})