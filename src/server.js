// server.js
// where your node app starts

// init project
const express = require('express')
const cors = require('cors')

const service = require('./service')

const app = express()

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
app.use(cors({ optionSuccessStatus: 200 })) // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'))

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/views/index.html`)
})

// your first API endpoint...
app.get('/api/whoami', (req, res) => {
  res.json(service.getWhoami(req))
})

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Your app is listening on port ${listener.address().port}`)
})
