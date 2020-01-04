var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')


const app = express()

// app.use(express.static('src/client')) Bc have new dist file need new location to look for asset files
app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('/client/views/index.html', { root: __dirname + '/..' }) Don't need this reference because we have created a reference is the dist file. 
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 3000!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
