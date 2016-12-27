import path from 'path'
import express from 'express'

import {
  devMiddleware,
  hotMiddleware,
} from './middleware/webpack-dev-middleware'

const app = express()

const PORT = 3000

app.use(express.static(path.join(process.cwd(), 'public')))

const env = app.get('env')

if (env !== 'production') {
  app.use(devMiddleware)
  app.use(hotMiddleware)
}
else {
  app.use(express.static(path.join(process.cwd(), 'bundle')))
}

app.use('*', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'public', 'index.html'))
})

app.listen(
  PORT,
  err =>
    err
      ? console.error(err)
      : console.log(`Server running @ localhost:${ PORT }`)
)

process.on('uncaughtException', (err) => {
  console.error(err)
  process.exit()
})
