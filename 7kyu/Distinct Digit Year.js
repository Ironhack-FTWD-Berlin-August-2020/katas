/* 
https://www.codewars.com/kata/58aa68605aab54a26c0001a6
The year of 2013 is the first year after the old 1987 with only distinct digits.
Now your task is to solve the following problem: given a year number, find the minimum year number which 
is strictly larger than the given one and has only distinct digits.
Input/Output
[input] integer year
1000 ≤ year ≤ 9000
[output] an integer
the minimum year number that is strictly larger than the input number year and all its digits are distinct.
*/

function numberIsDistinct(num) {
    num = num.toString()
    for (let i = 0; i < num.length; i++) {
        if (num.indexOf(num[i], i + 1) !== - 1) {
            return false
        }
    }
    return true
}

function distinctDigitYear(year) {
    for (let i = year + 1; i < 9999; i++) {
        if (numberIsDistinct(i)) {
            return i;
        }
    }
}

function distinctDigitYear(year) {
    year++
    while ((new Set(year.toString())).size < 4) {
        year++
    }
    return year
}