const express = require('express');
const path = require('path')
const morgan = require('morgan');
const { create } = require('express-handlebars');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '/public')))

//HTTP logger
const hbs = create({
  extname: '.hbs'
})
app.use(morgan('combined'))

//template engine
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'))


app.get('/', (req, res) => {
  res.render('home');
})
app.get('/tin-tuc', (req, res) => {
  res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})