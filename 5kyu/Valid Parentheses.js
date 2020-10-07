/*
https://www.codewars.com/kata/52774a314c2333f0a7000688
Write a function called that takes a string of parentheses, and determines if the order of the parentheses
is valid. The function should return true if the string is valid, and false if it's invalid.
Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= input.length <= 100
*/

const validParentheses = p => {
    while (p.includes('()')) {
        p = p.split('()').join('');
        // p = p.replace('()', '')
    }
    return p.length === 0;
}

const validParentheses = p => {
    let queue = [];
    for (let el of p) {
        if (el === '(') {
            queue.push(el);
        }
        else if (queue.pop() !== '(') {
            return false;
        }
    }
    return queue.length === 0;
}

const validParentheses = p => {
    let count = 0;
    for (let i = 0; i < p.length; i++) {
        if (p[i] === "(") {
            count++;
        };
        if (p[i] === ")") {
            count--;
        };
        if (count < 0) {
            return false;
        };
    }
    return count == 0;
}