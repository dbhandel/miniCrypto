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
function verifyEncryption (encrypted, answer) {
	var pw = (answer.toString().trim())
	var decrypted2 = "";
	for  (i=0; i<encrypted.length; i++) {
		var decryptedChar = String.fromCharCode((pw.charCodeAt(i)*5) % 26 + 97);
 		decrypted2 += decryptedChar;
	}
	if (decrypted2 ==encrypted) {
	return "verfied"
	}
	return "invalid"
}
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("Please create a new password: ", function(answer) {
	var 	encrypted = encrypt(answer.toString().trim());
		validate = verifyEncryption(encrypted,answer);
  console.log("Your encrypted password is:", encrypted);
  console.log("Confirm that the encyption algorithm is reproducible:", validate);
  rl.close();
});
