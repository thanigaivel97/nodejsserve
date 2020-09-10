const express = require('express')
const app = express();

const path = require('path')

app.use(express.static(path.join(__dirname, 'build')))

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})


app.get('/product/:url', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.get('/categories/:id', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))

})


app.get('/setup-demo', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})


app.get('/setup-demo/:item', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})



app.listen(80, () => {
    console.log('server listening on port 80')
});