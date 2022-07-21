const path = require('path')
const express =  require('express')
const app = express()
const PORT = 8080

app.use(express.static('public'))

app.listen(PORT, ()=>{
  console.log(`listening on port: ${PORT}`)
})

    // "test": "echo \"Error: no test specified\" && exit 1",
    // "start": "node server",
    // "build": "webpack build",
    // "dev": "nodemon server"
