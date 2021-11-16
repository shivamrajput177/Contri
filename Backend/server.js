const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const dotenv = require('dotenv')
const cors = require('cors')
const body=require('body-parser')

require('./models/user')
require('./models/card')
require('./models/propertydetails')
const app = express()


dotenv.config()

app.use(cors())
app.use(morgan('common'))
app.use(express.json())
app.use(express.urlencoded())



const PORT = process.env.PORT || 5000

const middlewares = require('./middlewares')


mongoose.connect("mongodb+srv://lama:lama@cluster0.kyxtu.mongodb.net/home?retryWrites=true&w=majority",{
  useNewUrlParser : true,
  useUnifiedTopology : true,
}).then(()=>{console.log("Database Connected !! ")})
.catch((err)=>console.log("Databse Not Connected !!! ",err))


app.use(require('./routes/auth'))
app.use(require('./routes/card'))
app.use(require('./routes/property'))

app.get('/',(req,res)=>{
  res.json({
    message:'Home Page',
  })
})



app.use(middlewares.urlNotFound)
app.use(middlewares.statusError)


app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
)