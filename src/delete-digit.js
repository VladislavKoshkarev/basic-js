const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = []
  let str = String(n)
  for (let i = 0; i < str.length; i++) {
    let newStr = `
    ${str.split('').slice(0, i).join('')}${str.split('').slice(i + 1).join('')} 
    `
    arr.push(newStr)
  }
  arr.sort()
  return +arr[arr.length - 1]
}

module.exports = {
  deleteDigit
};
