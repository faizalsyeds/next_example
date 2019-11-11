const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const express = require ('express')
const bodyParser = require('body-parser')
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
console.log("inside server")
app.prepare()
.then(() => {
  const server = express()

  server.post('/test',(req, res) => {
        // const { email, name } = req.body
        // console.log(req.body)
        res.send({message : 'success'})

  })
  server.get('/something', (req, res) => {
    res.send({message : 'success'})
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })
 
  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})