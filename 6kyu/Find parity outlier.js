/*
https://www.codewars.com/kata/5526fc09a1bbd946250002dc
You are given an array (which will have a length of at least 3, but could be very large) 
containing integers. The array is either entirely comprised of odd integers or entirely 
comprised of even integers except for a single integer N. Write a method that takes the 
array as an argument and returns this "outlier" N.
Examples
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)
[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)
*/

const even = num => num % 2 === 0
const odd = num => num % 2 !== 0

const findOutlier = int => {
    return int.slice(0, 3).filter(even).length >= 2 ?
        int.find(odd) : int.find(even)
}

const findOutlier = (integers) => {
    const odds = [];
    const evens = [];
    // iterate over integers
    for (let num of integers) {
        // for every number check if it is odd or even
        // push into the correct array
        num % 2 === 0 ? evens.push(num) : odds.push(num)
    }
    // check length of odds -> > 1 ? return even
    return odds.length > 1 ? evens[0] : odds[0]
}