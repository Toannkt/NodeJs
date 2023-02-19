const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const routes = require('./routes');
const methodOverride = require('method-override');


const db = require('./config/db')
//connect db
db.connect();

const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({
  extended: true
}))

//override with POST having?_method=DELETE
app.use(methodOverride('_method'));


//HTTP logger
app.use(morgan('combined'));

//template engine
app.engine('hbs', handlebars.engine({
  extname: 'hbs',
  helpers: {
    sum: (a, b) => a +b ,
  }
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));///resourses


routes(app);

app.listen(port, () => {
  console.log(`=> Server is running, this is link:   http://localhost:${port}`)
})