const express = require('express');
const router = express.Router();
const sayHello = require('../Controller/hello.controller');

router.get('/hello', sayHello);

module.exports = router;
