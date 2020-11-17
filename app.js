const express = require('express')
const app = express()
const port = 3000


app.use(express.static('css'))

app.set('views','./views')
app.set('view engine', 'ejs')

app.get('', (req,res) => {
res.render('home')
})

app.get('/home', (req,res) => {
    res.render('home')
    })

app.get('/contactus', (req,res) => {
    res.render('contactus')
})

app.get('/daftar', (req,res) => {
    res.render('daftar')
})

app.get('/dekorasi', (req,res) => {
    res.render('dekorasi')
})

app.get('/galeri', (req,res) => {
    res.render('galeri')
})

app.get('/price', (req,res) => {
    res.render('price')
})

app.get('/servis', (req,res) => {
    res.render('servis')
})

app.get('/teams', (req,res) => {
    res.render('teams')
})

app.get('/testimoni', (req,res) => {
    res.render('testimoni')
})

app.get('/thankyou', (req,res) => {
    res.render('thankyou')
})


app.listen(port, () => console.info(`Listening on port ${port}`))





