const express = require('express');

const app = express();

const helloRoutes = require('./routes/hello.routes');

// middleware to parse JSON bodies
app.use(express.json());

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'pug');

app.use((err, req, res, next) => {
		res.status(500).send(err.message)
	});
    


// use the hello routes
app.use('/api', helloRoutes);

module.exports = app;