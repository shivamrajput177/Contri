const express = require('express')
const morgan = require('morgan')
const dotenv = require('dotenv')
const cors = require('cors')
const body=require('body-parser')

const app = express()


dotenv.config()

app.use(cors())
app.use(morgan('common'))
app.use(express.json())
app.use(express.urlencoded());


const PORT = process.env.PORT || 5000

app.get('/',(req,res)=>{
  res.json({
    message:'Home Page',
  })
})


app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
)