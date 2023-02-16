const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
console.log(handlebars);
const app = express();
const port = 3000;

//HTTP logger
app.use(morgan('combined'));

//template engine
app.engine('hbs', handlebars.engine({
  extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/resources/views'));///resourses


app.get('/', (req, res) => {
  res.render('home')
})

app.get('/newspage', (req, res) => {
  res.render('newspage')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})