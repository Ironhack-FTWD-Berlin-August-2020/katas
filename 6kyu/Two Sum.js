/*
https://www.codewars.com/kata/52c31f8e6605bcc646000082
Write a function that takes an array of numbers (integers for the tests) and a target number.
It should find two different items in the array that, when added together, give the target value.
The indices of these items should then be returned in a tuple like so: (index1, index2).
For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.
The input will always be valid (numbers will be an array of length 2 or greater,
and all of the items will be numbers; target will always be the sum of two different items from that array).
Based on: http://oj.leetcode.com/problems/two-sum/
twoSum [1, 2, 3] 4 === (0, 2)
*/

// Two for loops
function twoSum(numbers, target) {
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) return [i, j];
        }
    }
}

// Same logic but using indexOf and subtraction
const twoSum = (numbers, target) => {
    let secondIndex;
    for (let i = 0; i < numbers.length; i++) {
        secondIndex = numbers.indexOf((target - numbers[i]), i + 1);
        if (secondIndex > - 1) return [i, secondIndex]
    }
}

// More efficient: creating a lookup object
const twoSum = (numbers, target) => {
    const numIndices = {}
    numbers.forEach((value, i) => numIndices[value] = i)
    for (let i = 0; i < numbers.length; i++) {
        const difference = target - numbers[i]
        if (numIndices[difference] !== undefined) {
            return [i, numIndices[difference]]
        }
    }
}