const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index')
})
app.get('/pagina2', (req, res) => {
  let num = Number(req.query.num)
  let total = num**2

  res.render('pagina2.ejs', {total})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})