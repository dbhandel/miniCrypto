var readline = require('readline');

function encrypt (password) {
	var pw = password.toString().trim();
	var encrypted ="";
	for  (i=0; i<password.length; i++) {
		var encryptedChar = String.fromCharCode((pw.charCodeAt(i)*5) % 26 + 97);
 		encrypted += encryptedChar;
	}
	return encrypted;
}

function decrypt (encrypted) {
	/*console.log("encrypted = " + encrypted);
	console.log("decrypt fn started");*/
	
	var decrypted = "";
	for  (i=0; i<encrypted.length; i++) {
		var decryptedChar = String.fromCharCode((encrypted.charCodeAt(i)*5) % 26 + 97);
 		decrypted += decryptedChar;
	}
	return decrypted;
}

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Please create a new password: ", function(answer) {
	var 	encrypted = encrypt(answer.toString().trim());
		decrypted = decrypt(encrypted);
  console.log("Your encrypted password is:", encrypted);
  console.log("Your decrypted password is:", decrypted);
  rl.close();
});
