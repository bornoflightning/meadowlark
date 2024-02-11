const express = require ('express');
// const router = express.Router();
const expressHandlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const handlers = require('./handlers.js');


const app = express();

//naming of port variable to static or available port
const port = process.env.PORT || 3001;

//middleware handling static files
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

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

app.get('/newsletter-signup', (req, res) => {
    res.render('newsletter-signup');
});


app.get('/newsletter-signup', handlers.newsletterSignup);
app.post('/newsletter-signup/process', handlers.newsletterSignupProcess);
app.get('/newsletter-signup/thank-you', handlers,newsletterSignupThankYou);

app.get('newsletter', handlers.newsletter);
app.post('/api/newsletter-signup', handlers.api.newsletterSignup);


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
});




//list for port and log to console
app.listen(port, () => console.log(
    `Server running on http://localhost:${port};` +
    `press Ctrl+C to terminate.`
))