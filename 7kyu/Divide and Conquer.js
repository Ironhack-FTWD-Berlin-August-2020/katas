/*
https://www.codewars.com/kata/57eaec5608fed543d6000021/train/javascript
Given a mixed array of number and string representations of integers, add up the string integers
and subtract this from the total of the non-string integers.
*/

function divCon(ar) {
    let sumNum = 0;
    let sumString = 0;
    for (let number of ar) {
        if (typeof number === 'number') {
            sumNum += number;
        }
        if (typeof number === 'string') {
            sumString += Number(number)
        }
    }
    return sumNum - sumString
}

function divCon(ar) {
    return ar.reduce(function (res, number) {
        if (typeof number === 'number') {
            return res + number
        } else {
            return res - Number(number)
        }
    }, 0)
}