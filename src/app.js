const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

// Global variables & constants
const name = 'Jorge Escamilla';

// Define express paths & configs
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handlebars & view engine
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static content
app.use(express.static(publicDirectoryPath));

// Routes
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name
    })
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name
    })
});

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text',
        title: 'Help',
        name
    })
});

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address!'
        })
    }

    res.send({
        forecast: 'It is snowing',
        location: 'Chihuahua',
        address: req.query.address
    })
});

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name,
        errorMessage: 'Help article not found.'
    })
});

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name,
        errorMessage: 'Page not found.'
    })
});

// Running server
app.listen(3000, () => {
    console.log('server up & running');
});