// Code a for loop that runs through all numbers from 0-99 
// and append all numbers divisible by seven into a string. 
// Return this string.
function easyLoop() {
  let result = "";
  let number = 0;
  for(let i = 0; i < 99; i++) {
      if(number % 7 == 0) {
          result += number;
      }
      number ++;
  }
  return result;
}
console.log(easyLoop());

/* Password security 
Given are two strings password and password_repeat. Check if the password is secure by the following critera:
- both passwords must match
- password must be at least 20 chars */
function checkPassword(password, password_repeat) {
  if (password == password_repeat && password.length > 20) {
      return true;
  } else {
      return false;
  }
}
console.log(checkPassword('omvdsse', 'omvdsse')); //false
console.log(checkPassword('gWb8reHTbuo3nbRp5EL625is', 'gWb8reHTbuo3nbRp5EL625is')); //true

// Given is a word word. Run through the word and merge every second letter into a new word.
function strangeWord(word) {
  let index = 0;
  let arr = [];
  let result = "";
  for(let i = 0; i < word.length; i ++ ) {
    //console.log(word[index]);
    arr[i] = word[index];
    index += 2;
  }
  for(let i = 0; i < arr.length; i ++ ) {
    if(arr[i]!==undefined) {
      result += arr[i];
    }
  }
  return result;
}
console.log(strangeWord('JSCodebox'));
console.log(strangeWord('Challenge'));
