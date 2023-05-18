const express = require('express')

const app = express()
const port = 5000

/* Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/js', express.static(__dirname + 'public/js'))
*/

app.use('/html', express.static(__dirname + 'public/html'))

// Listen on port 5000
app.listen(process.env.PORT || port, () => console.log(`Listening on port ${port}`))

window.alert("l")