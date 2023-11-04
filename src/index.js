const express = require('express');
const morgan = require('morgan');
const path = require('path')
const { create } = require('express-handlebars');
const app = express();
const port = 3000;
const methodOverride = require('method-override') 

app.use(express.static(__dirname + "/public"));

//HTTP logger
// app.use(morgan('combined'))

//Lấy được dữ liệu nhập vào (như trong req.body)
app.use(express.urlencoded({ extended: true })); 
app.use(express.json());

app.use(methodOverride('_method'));

const route = require('./routes')
const db = require('./config/db')

//Connect db
db.connect();
//HTTP logger
const hbs = create({
  extname: '.hbs',
  helpers: {
    sum: (a,b) => a + b,
  }
})
// app.use(morgan('combined'))

//template engine
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'))

//Route init
route(app)

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})