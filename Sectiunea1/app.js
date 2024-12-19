var first_name = 'Ion';
var last_name = 'Ionescu';
var email = 'ion@yahoo.com';
function fullName() {
  return first_name + ' ' + last_name;
}

//exemplu de export variabile si functii dim module
module.exports = {
  shareFunction: fullName,
  shareEmail: email,
};
