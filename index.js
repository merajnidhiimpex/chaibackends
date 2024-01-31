require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/twiter', (req, res)=>{
    res.send("This is my Twiter Account")
})

app.get('/login', (req, res)=>{
    res.send("<h1>Please login at Chai aur Code</h1>")
})


app.get('/youtube', (req, res)=>{
    res.send("<h2>Chai walaaa !!! chai Wala !!!!  Chai !!!  Chai !!!  Chai !!!</h2>")
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})

// ssh-keygen -t ed25519 -C "merajnidhiimpex@gmail.com"

// cat ~/.ssh/id_ed25519.pub | clip


// ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIEcFF1D+SVtLG/d77/eigDk16MsclQ51PvOLXniVFI9p merajnidhiimpex@gmail.com

