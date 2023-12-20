require('dotenv').config()
const cors = require('cors')


const express = require('express')
const mongoose = require('mongoose')

const app = express()

app.use(cors())
app.use(express.json())

app.use(require('./routes/User.router'))
app.use(require('./routes/todos.router'))

mongoose.connect(process.env.MONGO , {
    useNewUrlParser : true , 
    useUnifiedTopology: true
})

app.listen(process.env.PORT, () => console.log('Connected...'))