/*
https://www.codewars.com/kata/57a6633153ba33189e000074/
Count the number of occurrences of each character and return it as a list of tuples in order of appearance. 
For empty output return an empty list.
Example:
orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
*/


function orderedCount(text) {
    // turn string into array
    const arr = text.split('')
    // remove the duplicates
    const noDuplicates = arr.filter(function (char, index) {
        return arr.indexOf(char) === index
    })
    // replace every non duplicate character with an array containing the character and the number of occurences
    return noDuplicates.map(function (el) {
        return [el, text.split(el).length - 1]
    })
}

// get number of occurences of character in a string:
// 'abcdb'.split('b').length - 1  ->   2