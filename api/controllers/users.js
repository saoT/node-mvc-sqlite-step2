'use strict';


const db = require('../../database');

//------------------ /!\ ------------------//
// N'oubliez pas de rajouter la méthode pour chaque route.
// ----------------------------------------//
const users  = {

  // Find a user by name
  find : function (req, res) {
    db.all('SELECT * from users WHERE mail=?', req.query.mail, (err, data) => {
      if (!err) res.send('Operation completed ' + data[0]);
      else res.send('Operation failed :: ' + err);
    });
  },

  // create a new user
  create : (req, res) => {
    db.run('INSERT into users values (?)', req.body.mail, err => {
      if (err) res.send('Operation failed : \n' + err);
      else res.send(`Operation succeeded !`);
    });
  }

}

module.exports = users;