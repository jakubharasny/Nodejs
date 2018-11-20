var db = require('./db.js');

module.exports.handleSignup = (email, password) => {
db.saveUser({email,password});
/* REMEMBER (ES6)!! Above is equal to:
db.saveUser({
  email: email,
  password: password
}); */
};