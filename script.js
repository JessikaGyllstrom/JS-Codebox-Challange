// Given is an array numbers. Return the number of odd numbers.
function countOdds(numbers) {
    let oddCounter = 0;
    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] % 2 != 0) {
            oddCounter ++;
        }
    }
    return oddCounter;
}
console.log(countOdds([1,5,2,6,5,3,9,2]));//5
console.log(countOdds([2,6,2,5,2,8]));//1

// Given is an array chars with different letters. 
// Return the array in reverse order.
function reverseLetters(chars) {
    chars.reverse();
    return chars;
}
console.log(reverseLetters(['b','d','x','p','c']));//[ 'c', 'p', 'x', 'd', 'b' ]

// A string url is given. It contains a URL with the HTTP protocol. 
// Return this URL with the HTTPS protocol.
function http2https(url) {
    url = url.substring(0, 4) + "s" + url.substring(4, url.length);
    return url;
}
console.log(http2https('http://jscodebox.com/'));//https://jscodebox.com/
console.log(http2https('http://jscodebox.com:80/home?admin=1&test=0'));//https://jscodebox.com:80/home?admin=1&test=0

// A string string is given. Remove any occurrence of 'bug' by 'flower'. 
// Attention: 'bug' can occur several times in the string.
function bugFixFinal(string) {
    const str = string.replace(/bug/gi, "flower");
    return str;
}
console.log(bugFixFinal('xxbugYYX')); //xxflowerYYX
console.log(bugFixFinal('xxbugXbugbugYYy')); //xxflowerYYX

// Given are two variables child1 and child2 with a numeric value 
// between 0 and 99. 
// Return true if a child is between 0 and 14 (0 and 14 inclusive). 
// Return false if both or none in between.
function littleChild(child1, child2) {
    if ((child1 >= 0 && child1 <=14) && (child2 >= 0 && child2 <=14)) {
        return false;
    }
    else if ((child1 >= 0 && child1 <=14) || (child2 >= 0 && child2 <=14)) {
        return true;
    } else {
        return true;
    }
}
console.log(littleChild(4, 15));//true
console.log(littleChild(9, 7));//false
console.log(littleChild(21, 20));//false
console.log(littleChild(0, 3));//false
console.log(littleChild(15, 13));//true

// The parameter n is given. 
// Return the difference of n to the number 42. 
let difference42= (n) => 42 - n;
console.log(difference42(7));//35
console.log(difference42(42));//0

// Two numbers are given a and b. Return their sum. 
// If both numbers are equal, return their product.
function totalProduct(a, b) {
    if(a!=b) {
        let sum = a + b;
        return sum;
    } else {
        let product = a * b;
        return product;
    }
}
console.log(totalProduct(2, 0));//2
console.log(totalProduct(7, 7));//49

// The HTML element .bg is given. 
// Change the background color of this element to 'blue'.
document.write('<div class="bg" style="width: 100%; height: 100%; color: #FFF; display: flex; align-items: center; justify-content: center;">Bluescreen of death!</div>');


