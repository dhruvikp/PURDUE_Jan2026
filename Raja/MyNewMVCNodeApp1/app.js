const express = require('express');
const app = express();
const helloRoutes = require('./Routes/hello.routes');

app.use(express.json());
app.use('/api', helloRoutes);

module.exports = app;
