const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')
const taskRouter = require('./routes/task-router')
const childRouter = require('./routes/child-router')
const stockRouter = require('./routes/stock-router')
const stockTransactionRouter = require('./routes/stock-transaction-router')

const app = express()
const apiPort = 3001

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', taskRouter)
app.use('/api', childRouter)
app.use('/api', stockRouter)
app.use('/api', stockTransactionRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
