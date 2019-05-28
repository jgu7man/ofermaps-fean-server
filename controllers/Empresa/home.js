var db = require('../../index'); //LLAMADO A FIRESTORE
var FileSystem = require('fs'); //para Post imágenes y Get de imágenes
var path = require('path');

var control = {
    home: function(req, res) {
        return res.status(200).send({
            message: 'soy inicio'
        });
    },
};

module.exports = control;