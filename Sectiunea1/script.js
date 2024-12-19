/* 
	'global' este obiectul global in node.js
	aceste este echivalentul obiectului 'windows' din browser
*/
function setTimerCount() {
  var nr = '12345';
  global.console.log(btoa(nr));
  console.log(global.atob('MTIzNDU='));

  setTimeout(function () {
    console.log('I am running...');
  }, 3000);
}
setTimerCount();
