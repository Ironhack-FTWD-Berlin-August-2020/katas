/*
https://www.codewars.com/kata/5878520d52628a092f0002d0
Given a string, return a new string that has transformed based on the input:
Change case of every character, ie. lower case to upper case, upper case to lower case.
Reverse the order of words from the input.
For example:
"Example Input" ==> "iNPUT eXAMPLE"
You may assume the input only contain English alphabet and spaces.
*/

const stringTransformer = s =>
    s.split('')
        .map(char => char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase())
        .join('')
        .split(' ')
        .reverse()
        .join(' ')