let express = require(`express`);
let app = express();
let port = 3002;

// Запуск сервера
app.listen(port, function () {
    console.log(`http://localhost:${port}`);
});

// Настройка POST-запроса — JSON
app.use(express.json());

app.use(express.static('public'));

// Настройка handlebars
const hbs = require('hbs');
app.set('views', 'views');
app.set('view engine', 'hbs');

app.get('/', function (req, res)  {
    res.render('index');
}) 