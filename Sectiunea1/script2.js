//exemplu de import module
const module2 = require('./app.js');

var email = module2.shareEmail;
var fullName = module2.shareFunction();

console.log(fullName);
console.log('Email:' + email);
