var readline = require('readline');

function encrypt (password) {
	// body...
	// return encrypted password
}

function decrypt (encrypted) {
	// body...
	// return decrypted password
}

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Please create a new password: ", function(answer) {
  // TODO: Log the answer in a database
  console.log("Your encrypted password is:", answer);
  console.log("Your decrypted password is:", answer);
  rl.close();
});


// .toString().trim();