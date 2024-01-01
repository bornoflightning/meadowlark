const express = require ('express');
const expressHandlebars = require('express-handlebars');

const app = express();

//naming of port variable to static or available port
const port = process.env.PORT || 3001;

//middleware handling static files
app.use(express.static(__dirname + '/public'));

//configure handlebars engine
app.engine('handlebars', expressHandlebars.engine({
    defaultLayout: 'main',
}))
app.set('view engine', 'handlebars');

//routes
//home page
app.get('/', (req, res) => res.render('home'));

//about page
app.get('/about', (req, res) => res.render('about'));

//custom 404 page
app.use((req, res) => {
    res.status(404);
    res.render('404');
});

//Custom 500 page
app.use((err, req, res, next) => {
    console.error(err.message);
    res.status(500);
    res.render('500');
})

//list for port and log to console
app.listen(port, () => console.log(
    `Server running on http://localhost:${port};` +
    `press Ctrl+C to terminate.`
))