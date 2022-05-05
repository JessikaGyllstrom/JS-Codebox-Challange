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
console.log(firstJSON('name', 'JSCodebox'));