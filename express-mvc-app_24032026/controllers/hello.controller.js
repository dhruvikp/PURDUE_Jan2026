const helloModel = require('../models/hello.model');

exports.sayHello = (req, res) => {

    const message = helloModel.getMessage();

    res.send(message);
};

exports.sayHelloToName = (req, res) => {
    const name = req.params.name;
    throw new Error('Something went wrong!'); // Simulate an error for testing
    res.send(`Hello, ${name}!`);
};

exports.sayHelloToNameAndDesignation = (req, res) => {
    const name = req.params.name;
    const designation = req.params.designation;
    res.send(`Hello, ${name}! You are a ${designation}.`);
};


exports.renderHomePage = (req, res) => {
    res.render('index', { message: 'Hello, World!' });
};


exports.showForm = (req, res) => {
    res.render('form');
};



exports.submitForm = (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    res.send(`Form submitted! Hello, ${name}! Your email is ${email}.`);
};