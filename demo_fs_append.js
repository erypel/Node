var fs = require('fs');

//create a file named mynewfile1.txt
fs.appendFile('mynewfile1.txt', " Hello content!", function (err) {
	if(err)
		throw err;
	console.log('Saved!');
});

fs.appendFile('mynewfile1.txt', ' This is my text.', function(err) {
	if(err) throw err;
	console.log("Updated!");
});