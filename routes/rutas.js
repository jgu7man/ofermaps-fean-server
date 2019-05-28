var express = require('express');
var router = express.Router();

// var multiparty = require('connect-multiparty');

var HomeController = require('../controllers/Empresa/home');
router.get('/', HomeController.home);

module.exports = router;