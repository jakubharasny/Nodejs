const express = require('express');
const hbs = require('hbs'); // eslint-disable-line
const app = express();

hbs.registerPartials(`${__dirname}/views/partials`);
app.set('view engine', 'hbs');


// handlebar helpers
hbs.registerHelper('getCurrentYear', () => new Date().getFullYear());
hbs.registerHelper('screamIt', text => text.toUpperCase());

// all files/pages inside public directory
app.use(express.static(`${__dirname}/public`)); // Express Middleware

// specific pages rendered through hbs
app.get('/', (req, res) => {
  res.render('homepage.hbs', {
    pageTitle: 'HomePage',
    welcome: 'Siema cie ludzie',
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page',
  });
});

// custom page when 404
app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Lets just say that this is 404',
  });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server is up on localhost:3000');
});
