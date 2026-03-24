const express = require('express');
const router = express.Router();
const {sayHello, sayHelloToName, sayHelloToNameAndDesignation, renderHomePage, showForm, submitForm} = require('../controllers/hello.controller');



router.get('/hello', sayHello);
router.get('/hello/:name', sayHelloToName);
router.get('/hello/:name/designation/:designation', sayHelloToNameAndDesignation);

router.get('/', renderHomePage);

router.get('/form', showForm);
router.post('/submit', submitForm);

module.exports = router;