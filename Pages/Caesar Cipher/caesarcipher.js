let alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


let lookup_table = {
 'A': 'Z', 'B': 'Y', 'C': 'X', 'D': 'W', 'E': 'V',
'F': 'U', 'G': 'T', 'H': 'S', 'I': 'R', 'J': 'Q',
'K': 'P', 'L': 'O', 'M': 'N', 'N': 'M', 'O': 'L',
'P': 'K', 'Q': 'J', 'R': 'I', 'S': 'H', 'T': 'G',
'U': 'F', 'V': 'E', 'W': 'D', 'X': 'C', 'Y': 'B', 'Z': 'A'
};

function atbash(message) {
  let cipher = '';
  for (let letter of message) {
    // checks for space
    if (letter !== ' ') {
      // adds the corresponding letter from the lookup_table
      cipher += lookup_table[letter];
    } else {
      // adds space
      cipher += ' ';
    }
  }
  return cipher;
}

// Driver function to run the program
function main() {
  // encrypt the given message
  let message = 'POOP';
  console.log(atbash(message.toUpperCase()));

  // decrypt the given message
  message = 'KLLK';
  console.log(atbash(message.toUpperCase()));
}

// Executes the main function
main();

function encrypt(key, val) {
  let result = [];

  for (let i = 0; i < val.length; i++) {
    let currentLetter = val[i];

    if (matchAlpha(currentLetter) >= 0) {
      let newIndex = (matchAlpha(currentLetter) + key) % 26; // Ensure the index wraps around
      result.push(alpha[newIndex]);
    } else {
      result.push(currentLetter); // If it's not an alphabet letter, keep it unchanged
    }
  }

  return (result.join('')); // Print the encrypted result
}

function decrypt(key, val) {
  let result = [];

  for (let i = 0; i < val.length; i++) {
    let currentLetter = val[i];

    if (matchAlpha(currentLetter) >= 0) {
      let newIndex = (matchAlpha(currentLetter) - key + 26) % 26; // Ensure the index wraps around correctly
      result.push(alpha[newIndex]);
    } else {
      result.push(currentLetter); // If it's not an alphabet letter, keep it unchanged
    }
  }

return (result.join('')); // Print the decrypted result
}

function matchAlpha(letter1) {
  for (let j = 0; j < alpha.length; j++) {


    if (letter1 === alpha[j]) {
      return j;
    }
  }
  return -1; // Return -1 if the letter is not found in the alphabet
}

// Example usage
console.log(encrypt(3, 'SKATE'));

console.log(decrypt(3, encrypt(3, 'SKATE')));

function processPhrase() {
  let inputPhrase = document.getElementById('inputPhrase').value;
  let inputKey = parseInt(document.getElementById('inputKey').value) || 0; // Use 0 if the key is not a valid number

  // Encrypt the phrase
  let encryptedPhrase = encrypt(inputKey, inputPhrase);
  document.getElementById('encrypted').textContent = encryptedPhrase;

  // Decrypt the encrypted phrase
  let decryptedPhrase = decrypt(inputKey, encryptedPhrase);
  document.getElementById('decrypted').textContent = decryptedPhrase;
}
