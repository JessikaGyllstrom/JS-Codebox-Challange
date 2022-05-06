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
console.log(strangeWord('JSCodebox')); //JCdbx
console.log(strangeWord('Challenge')); //Calne

/* Given are two arrays a and b, both have three elements. 
Return a new array of length 2 containing both middle (index 1) elements of the arrays. */ 
function goldenMiddle(a, b) {
  const array = [];
  array[0] = a[1];
  array[1] = b[1];
  return array;
}
console.log(goldenMiddle([1,6,8], [4,6,2])); // 6,6

/* Given is an object obj each with two properties (name & category) of type String. 
Return the value of the property with the longer string. If both are of equal length, 
return the value of the name property.*/
function theGround(obj) {
  if (obj.name.length == obj.category.length) {
    return obj.name;
  }
  else if(obj.name < obj.category) {
    return obj.name;
  } else {
    return obj.category;
  }
}
console.log(theGround({"name":"dirt","category":"alpha"})); //alpha
console.log(theGround({"name":"stone","category":"alpha"})); //stone
console.log(theGround({"name":"quartz","category":"gamma"})); //gamma

/* Given is a text headline. Write this string in a h1 HTML tag and 
append it to the HTML body.*/ 

/*function printHeadline(headline) {
  var myDiv = document.createElement("div");
  myDiv.id = 'div_id';
  myDiv.innerHTML = `<h1>${headline}</h1>`;
  document.body.appendChild(myDiv);
}
console.log(printHeadline("This is a headline")); */

// Two variables are given key and value. 
// Return these values in JSON notation.
function firstJSON(key, value) {
  let obj = {
  }
  obj[`${key}`] = value;
  return obj;
}
console.log(firstJSON('name', 'JSCodebox')); //{ name: 'JSCodebox' }
console.log(firstJSON('difficulty', '42')); // { difficulty: '42' }

/* Given is a string n. The task is to return the sentence in CamelCase 
notation. This means that each new word is capitalized and immediately 
appended to the old word. Start with a lowercase letter. */
function camelCase(n) {
    // split string into words => [ 'string', 'not', 'found' ]
    // split () method splits a string into an array of substrings
    // returns a new array
    var separateWord = n.toLowerCase().split(' ');
    for (var i = 1; i < separateWord.length; i++) {
       separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
       // the substring method extracts characters between two 
       // indices from a string and returns a substring 
       separateWord[i].substring(1);
    }
    return separateWord.join(''); 
}
console.log(camelCase('String not found')); //stringNotFound
console.log(camelCase('Nice Challenge')); //niceChallenge

//w3Schools on substrings

let text = "Hello world!";
let result = text.substring(4, 1);
console.log(result); //ell

let txt = "Hello world!"; 
let res = text.substring(-6, 6);
console.log(res); //Hello

//w3Schools on charAt

// Get the last character in a string:
let str = "HELLO WORLD";
let letter = str.charAt(str.length-1);
console.log(letter); // D

let t = "HELLO WORLD";
let l = t.charAt(4); // O
let q = t.charAt(5); // returns space __


/* Given is a String string and a number n. 
Return a string with the section from 0 to n in a row. 
In each run n is to be decremented. */
function repeater(string, n) {
  let result = "";
  for(let i = 0; i < string.length; i++ ){
    result += string.substring(0, n);
    n--;
  }
  return result;
}
console.log(repeater('JSCodebox', 6));// 'JSCodeJSCodJSCoJSCJSJ'
console.log(repeater('Foobar', 2)); // FoF
console.log(repeater('Hello coder!', 5)); //'HelloHellHelHeH'


// A string sentence is given. Return true if the block starts with "Hello".
function firstHello(sentence) {
  var separateWord = sentence.toLowerCase().split(' ');
  if(separateWord[0] == "hello") {
    return true;
  } else {
    return false;
  }
}
console.log(firstHello('Hello world!'));//true
console.log(firstHello('Whats up?'));//false

/* A variable pali is given. Return true if it is a palindrome. 
Otherwise false. A palindrome is a word that is read forward and 
backward, resulting in the same word.*/ 
function palindrome(pali) {
  let string =   pali.split('').reverse().join('');
  if (pali === string) {
    return true;
  } else {
    return false;
  }
}
console.log(palindrome('racecar')); //true
console.log(palindrome('baseball')); //false


// Given is a string item, with an item and a price in brackets. Return the price.
function getPrice(item) {
  let price = item.replace(/.*\(|\).*/g, '');  
  return price;
}
console.log(getPrice('Ice ($4.20)'));
console.log(getPrice('Potatoe salad ($6.50)'));

/* Given are two strings correct and wrong. 
Return all characters that are defective. 
You can recognize defective characters by the 
fact that they are displayed incorrectly in 
the string wrong. Return an array with their values. */
function keyboardError(correct, wrong) {
  let result = "";
  for (let i = 0; i < correct.length; i ++) {
    if(correct[i] !== wrong[i]){
      result += correct[i];
    }
  }
  return Array.from(new Set(result));
}
console.log(keyboardError('foobar', 'fiibnr')); // [ 'o', 'a' ]
console.log(keyboardError('hello there', 'hgllu thgrg')); // [ 'e', 'o' ]

