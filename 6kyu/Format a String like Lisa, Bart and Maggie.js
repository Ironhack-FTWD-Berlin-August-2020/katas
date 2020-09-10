/*
https://www.codewars.com/kata/53368a47e38700bd8300030d
Given: an array containing hashes of names
Return: a string formatted as a list of names separated by commas except
for the last two names, which should be separated by an ampersand.
Example:
list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'
list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'
list([ {name: 'Bart'} ])
// returns 'Bart'
list([])
// returns ''
*/

const list = ar => {
    let list = ''
    if (ar.length == 0) {
        return list
    }
    if (ar.length == 1) {
        return ar[0].name
    }
    if (ar.length == 2) {
        return `${ar[0].name} & ${ar[1].name}`
    }
    for (let i = 0; i < ar.length - 1; i++) {
        list += ', ' + ar[i].name
    }
    return list.slice(2) + ' & ' + ar[ar.length - 1].name
}

// shorter
const list = ar => {
    const last = ar.length > 0 ? ar.pop() : { name: '' }
    const res = ar.map(n => n.name).join(', ')
    return res ? `${res} & ${last.name}` : last.name
}

// using reduce
const list = names => {
    return names.reduce((acc, cur, index, array) => {
        if (index === 0) {
            return cur.name;
        }
        else if (index === array.length - 1) {
            return acc + ' & ' + cur.name;
        }
        else {
            return acc + ', ' + cur.name;
        }
    }, '')
}