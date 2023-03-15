var generator = require('generate-password');
function generatepassword(){


var password = generator.generate({
	length: 10,
	numbers: true
});
console.log(password);
}

console.log(generatepassword());