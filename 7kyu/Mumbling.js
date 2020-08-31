/*
https://www.codewars.com/kata/5667e8f4e3f572a8f2000039
This time no story, no theory. The examples below show you how to write function accum:
Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

function accum(s) {
    return s.toLowerCase().split('').map(function (char, i) {
        return char.toUpperCase() + char.repeat(i);
    }).join('-')
}

// another solution
function accum(str) {
    const arr = str.toLowerCase().split('');
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
        let newChar = arr[i].toUpperCase() + arr[i].repeat(i);
        res.push(newChar)
    }
    return res.join('-')
}

// without turning the string into an array - we gonna have a dash at the end that we need to remove
function accum(s) {
    let newString = '';
    for (let i = 0; i < s.length; i++) {
        newString += s.slice(i, i + 1).toUpperCase() + s.slice(i, i + 1).toLowerCase().repeat(i) + '-';
    }
    return newString.slice(0, -1)
}