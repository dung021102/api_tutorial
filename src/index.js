const express = require('express')
const morgan = require('morgan')

const app = express()
const port = 3000

app.use(morgan('combined'))


app.get('/', (req, res) => {
   
  res.send('home');
})

app.get('/hone', (req, res) => {
   
  res.send('home 1');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})