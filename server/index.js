import routes from './routes'
import express from 'express'
import path from 'path'
import pug from 'pug'
import https from 'https'
import bodyParser from 'body-parser'
import compression from 'compression'
import fs from 'fs'
import cors from 'cors'

const SSL_KEY = './server/key.pem'
const SSL_CERT = './server/certificate.pem'
const SSL_C= './server/certificate.p12'

const app = express()

app.use(bodyParser.json())
app.use(cors())

app.engine('pug', pug.__express)
app.set('views', path.join(__dirname, '..', 'views'))
app.set('view engine', 'pug')
app.use(compression())
app.use(express.static('./public'))
app.get('*.js', (req, res, next) => {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next()
})
app.use('/', routes)

https.createServer({
    key: fs.readFileSync(SSL_KEY),
    cert: fs.readFileSync(SSL_CERT),
    ca: fs.readFileSync(SSL_C)
}, app).listen(8080)
