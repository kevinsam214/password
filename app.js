const express = require('express');
const { engine } = require('express-handlebars');
const app = express();
const port = 3000;

app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  console.log(`伺服器已運作，監聽在 http://localhost:${port}`);
});
