var bcrypt = require('bcryptjs');

var hash = bcrypt.hashSync('bacon', 8);

module.exports = [{
    "name":"User 1",
    "email":"one@example.com",
    "password": hash
  },{
    "name":"User 2",
    "email":"second@example.com",
    "password": hash
  }]