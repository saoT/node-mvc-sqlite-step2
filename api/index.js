'use strict';

// Toutes les urls qui arrivent ici correspondent à www.site.com/api

const {Router} = require('express');
const bodyParser = require('body-parser');

// L'api récupère les controllers qui l'intéressent

//------------------ /!\ ------------------//
// N'oubliez pas d'importer chaque controller.
// ----------------------------------------//
const users = require('./controllers/users');
const products = require('./controllers/products');

// Elle crée un nouveau routeur/embranchage rien que pour notre api
const apiRoutes = new Router();

// On utilise bodyParser pour mieux parse les urls et leurs params/body
apiRoutes.use(bodyParser.urlencoded({extended: false}));
apiRoutes.use(bodyParser.json());

// Lorsque l'utilisateur fait une requete GET à l'url www.site.com/api/users
// On appelle la méthode `find` du controller users 

// methode get & post localhost:3000/api/users
// on peut écrire la fonction directement sans spécifier les params ils seront automatiquement passés

//------------------ /!\ ------------------//
// N'oubliez pas de définir chaque route.
// ----------------------------------------//
apiRoutes.get('/users', users.find);
apiRoutes.post('/users', users.create);

// methode get localhost:3000/api/users
apiRoutes.get('/products/:name', products.find);

module.exports = apiRoutes