/*
https://www.codewars.com/kata/586d6cefbcc21eed7a001155
For a given string s find the character c (or C) with longest consecutive repetition and return:
[c, l]
where l (or L) is the length of the repetition. If there are two or more characters with the same l 
return the first in order of appearance.
For empty string return:
["", 0]
Happy coding! :)
*/

const longestRepetition = s => {
    let longestReps = 0;
    let longestChar = '';
    let char = '';
    let repetition = 1;
    for (let i = 0; i < s.length; i++) {
        char = s[i];
        if (s[i + 1] === char) {
            repetition++
        } else {
            if (repetition > longestReps) {
                longestReps = repetition;
                longestChar = char;
            }
            repetition = 1;
        }
    }
    return [longestChar, longestReps]
}