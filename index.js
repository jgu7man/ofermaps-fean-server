// FIREBASE
var admin = require("firebase-admin");
var serviceAccount = require("./ofermaps-firebase.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://ofermaps-e462b.firebaseio.com"
});
var db = admin.firestore();
module.exports = db;


// EXPRESS
const express = require('express');
const app = express();
var port = process.env.PORT || 3000;


// BODY PARSER
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


var rutas = require('./routes/rutas');
app.use('/api', rutas);


app.listen(port, () => {
    console.log('Escuchando el puerto http://localhost:3000'); //o el puerto que se desee elegir
});