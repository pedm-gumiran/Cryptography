function caesarCipher(text, key, encode = true) {
  const result = [];
  key = encode ? key : -key; // For decoding, reverse the key
  key = key % 26; // Normalize key to be within 0-25

  for (let i = 0; i < text.length; i++) {
    let char = text[i];

    if (char.match(/[a-z]/i)) {
      let code = text.charCodeAt(i);

      // Uppercase letters
      if (char.toUpperCase() === char) {
        if (code >= 65 && code <= 90) {
          char = String.fromCharCode(((code - 65 + key + 26) % 26) + 65);
        }
      }
      // Lowercase letters
      else {
        if (code >= 97 && code <= 122) {
          char = String.fromCharCode(((code - 97 + key + 26) % 26) + 97);
        }
      }
    }

    result.push(char);
  }

  return result.join('');
}

const text = document.getElementById('text');
const key = document.getElementById('key');
const result = document.getElementById('result');

// Event listener for encoding
document.getElementById('encode-btn').addEventListener('click', function () {
  // Using ternary operators for validation and actions
  const message =
    text.value.trim() === '' || key.value.trim() === ''
      ? 'Fields must not be empty'
      : !isNaN(text.value)
      ? 'Text must be a letter'
      : isNaN(key.value)
      ? 'Key must be a number'
      : caesarCipher(text.value, parseInt(key.value), true);
  changeColor(text, key, message);
});

// Event listener for decoding
document.getElementById('decode-btn').addEventListener('click', function () {
  // Using ternary operators for validation and actions
  const message =
    text.value.trim() === '' || key.value.trim() === ''
      ? 'Fields must not be empty'
      : !isNaN(text.value)
      ? 'Text must be a letter'
      : isNaN(key.value)
      ? 'Key must be a number'
      : caesarCipher(text.value, parseInt(key.value), false);
  changeColor(text, key, message);
});

// Add event listener for keydown
document.addEventListener('keydown', function (event) {
  if (event.key === 'E' && event.shiftKey) {
    // Simulate clicking the encode button when 'e' is pressed
    document.getElementById('encode-btn').click();
  } else if (event.key === 'D' && event.shiftKey) {
    // Simulate clicking the decode button when 'd' is pressed
    document.getElementById('decode-btn').click();
  }
});

document.getElementById('clear-btn').addEventListener('click', function () {
  key.value = '';
  text.value = '';
  result.innerText = '';
});

function changeColor(text, key, message) {
  result.innerText = message;

  text.value.trim() === '' ||
  key.value.trim === '' ||
  !isNaN(text.value) ||
  isNaN(key.value)
    ? ((result.style.color = 'red'), result.classList.add('vibrate')) // Add vibrate effect
    : ((result.style.color = 'green'), result.classList.add('swing'));
}
