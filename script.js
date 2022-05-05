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
