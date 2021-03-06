const express = require('express'),
    morgan = require('morgan');
const app = express();


let topMovies = [
    {
        title: 'Lock, Stock, and Two Smoking Barrels',
        director: 'Guy Ritchie'
    },
    {
        title: 'WALL-E',
        director: 'Andrew Stanton'
    },
    {
        title: 'The Raid',
        director: 'Gareth Evans'
    },
    {
        title: 'Kick-Ass',
        director: 'Matthew Vaughn & Jeff Wadlow'        
    },
    {
        title: 'The Grand Budapest Hotel',
        director: 'Wes Anderson'        
    },
    {
        title: 'Pulp Fiction',
        director: 'Quentin Tarantino'        
    },
    {
        title: 'The Hateful Eight',
        director: 'Quentin Tarantino'        
    },
    {
        title: 'The Lives of Others',
        director: 'Florian Henckel von Donnersmarck'   
    },
    {
        title: 'Everything Everywhere All At Once',
        director: 'Daniel Kwan & Daniel Scheinert'        
    },
    {
        title: 'The Cabin in the Woods',
        director: 'Drew Goddard'        
    },

  ];


  app.use(morgan('common'));


  app.get('/', (req, res) => {
    res.send('Welcome to my film app!');
  });  

  app.get('/movies', (req, res) => {
    res.json(topMovies);
  });

  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });


  app.use('/', express.static('public'));


  app.listen(8080, () => {
    console.log('Your app is listening on port 8080.');
  });