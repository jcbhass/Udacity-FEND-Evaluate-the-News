var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
<<<<<<< HEAD
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
let projectData = {};
=======


const app = express()
>>>>>>> d68c4f3d5393dfe830a4fa3bd2d88b80f0a1ae62

// app.use(express.static('src/client')) Bc have new dist file need new location to look for asset files
app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('/client/views/index.html', { root: __dirname + '/..' }) Don't need this reference because we have created a reference is the dist file. 
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
<<<<<<< HEAD
const port = 3000;
app.listen(port, function () {
    console.log('Example app listening on port '+port+'!')
=======
app.listen(8080, function () {
    console.log('Example app listening on port 3000!')
>>>>>>> d68c4f3d5393dfe830a4fa3bd2d88b80f0a1ae62
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
<<<<<<< HEAD


// POST route
app.post('/', function (req, res) {
    projectData.date = req.body.date;
    projectData.temperature = req.body.temp;
    console.log('POST request received');
    res.end();
});

// GET route returns projectData
app.get('/all', function (req, res) {
    res.send(projectData);
    console.log('GET request received')
});
=======
>>>>>>> d68c4f3d5393dfe830a4fa3bd2d88b80f0a1ae62
