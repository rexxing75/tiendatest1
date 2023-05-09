const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 5000

/* Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/js', express.static(__dirname + 'public/js'))
*/


// Listen on port 5000
app.listen(process.env.PORT || port, () => console.log(`Listening on port ${port}`))