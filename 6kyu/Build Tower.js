/*
https://www.codewars.com/kata/576757b1df89ecf5bd00073b
Build Tower
Build Tower by the following given argument:
number of floors (integer and always greater than 0).

For example, a tower of 3 floors looks like below

[
  '  *  ', 
  ' *** ', 
  '*****'
]
and a tower of 6 floors looks like below

[
  '     *     ', 
  '    ***    ', 
  '   *****   ', 
  '  *******  ', 
  ' ********* ', 
  '***********'
]
*/


const towerBuilder = n => {
    const tower = [];
    for (let i = 1; i <= n; i++) {
        tower.push(
            ' '.repeat(n - i)
            + '*'.repeat(i * 2 - 1)
            + ' '.repeat(n - i)
        )
    }
    return tower;
}