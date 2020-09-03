/*
https://www.codewars.com/kata/56eb0be52caf798c630013c0
Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.
Find the number of Friday 13th in the given year.
Input: Year as an integer.
Output: Number of Black Fridays in the year as an integer.
Examples:
unluckyDays(2015) == 3
unluckyDays(1986) == 1
*/

function unluckyDays(year) {
    let date;
    let counter = 0;
    for (let i = 1; i <= 12; i++) {
        date = new Date(`${i}/13/${year}`);
        if (date.getDay() === 5) counter++
    }
    return counter
}