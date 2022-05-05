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

// Given is an array chars with different letters. Return the array in reverse order.
