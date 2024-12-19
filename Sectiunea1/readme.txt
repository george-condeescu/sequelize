2. Node installation
--------------------

3. Run first node program
-------------------------

4. Conceptul de global object in node.js
----------------------------------------

5. Despre module si tipuri de module
---------------------------------

1. Core module
- furnizate cu Node
- le gasim in documentatia node (de ex. OS, DNS, HTTP, Console, Crypto, Events, etc)
- utilizarea acestor module nu necesita nicio instalare via npm
- de exemplu avem modulul OS care se refera la sistemul de operare
- astfel utilizand modulul OS avem access la toate functiile si proprietatile din interiorul lui in aplicatia naostra

2. Custom module
- create de utilizator (app.js si script.js sunt considerate module custom)

3. Third party module
- care se instaleaza via npm

6. Ce este module.exports={} ?
---------------------------
-exports este o proprietate a obiectului module
-tot ce creem in javascript este un module, astfel avem modulele app.js si script.js
-pentru a exporta variabile sau functii dintr-un module folosim:
	module.exports = {
  		shareFunction: sayHello,
  		shareName: name,
	};	
-pentru a importa in alt module folosim:
const module2 = require("./app.js)

7. Cum lucram cu core module in node.js?
----------------------------------------
-pentru a importa un module (ex. OS ) utilizam :
	const os = require('node:os');
	console.log(os.homedir());

8. Ce este npm ?
----------------
-npm -> Node Package Manager (un tool care ajuta la instalarea modulelor de la terti)
-manager care manageriaza pachetele node
-site-ul unde gasim pachetele este npmjs.com
-initial rulam 'npm init' pentru a create 'package.json'
-pentru a instala express in proiectul curent (recomandat) rulam 'npm install express'
-pentru a instala expres global (va fi atasat la fisierele sistemului de operare) folosim 'npm install -g express'
-pentru a dezinstala rulam 'npm uninstall express'
-instalam nodemon 'npm install nodemon'

9. Ce este express si cum incepem sa-l utilizam ?
-------------------------------------------------
-un web framework minimalist, rapid pentru node.js
-il utilizam astfel:
---------------------------------------------------------------------
const express=require('express);
const app=express();
const port=8086;

app.get('/', function(req, res){
	res.send({status:true, message:"Welcome to express app.});
});


app.listen(port, function(){
	console.log(`Server started on http://localhost:${port}`);
});
---------------------------------------------------------------------

10. Cum cream rute in express ?
-------------------------------
// About us
app.get("/about-us", function(req,res){
	res.send({
		status:true,
		message:"About us."
	});
});

app.get("help", function(req,res){
	res.send({
		status:true,
		message:"Help."
	});
});

11. Ce este nodemon ?
---------------------
-'nodemon' este un instrument care ajută la dezvoltarea aplicațiilor bazate pe Node.js 
prin repornirea automată a aplicației nod atunci când sunt detectate modificări ale fișierelor din director.
-se instaleaza ca development dependency cu 'npm install --save-dev nodemon'

12. Ce sunt Request Methods & cind sa le utilizam ?
---------------------------------------------------
Metodele sunt:
	get	-get data
	post -save data
	put	- update data
	delete	- delete data

