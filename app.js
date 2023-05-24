const express = require('express')

const app = express()
const port = 5000

/* Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/js', express.static(__dirname + 'public/js'))
*/
app.use(express.static('public'))
//TEMPLATE ENGINE
app.set('views', './public/html')
app.set('view engine', 'ejs')

app.use(express.static('public'))



// Listen on port 5000
app.listen(process.env.PORT || port, () => console.log(`Listening on port ${port}`))

