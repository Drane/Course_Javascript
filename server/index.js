const express = require('express')
const serveStatic = require('serve-static')

const app = express()
const port = process.env.PORT || 666
const folder = process.env.FOLDER || '../exercises/Solutions/Cantersteen/Chapter 11'

app.use(serveStatic(folder, { 'index': ['index.html', 'history.html'] }))
app.listen(port, () => console.log(`Example server listening on port ${port} in folder ${folder}!`))