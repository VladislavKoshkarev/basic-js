const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let stringArr = [...str]
  let letterArr = []
  let numberArr = []
  stringArr.forEach((el, index) => {
    if (el !== stringArr[index - 1]) {
      letterArr.push(el)
      numberArr.push(1)
    }
    else {
      numberArr[letterArr.lastIndexOf(el)] += 1
    }
  })
  return letterArr.map((el, index) => [numberArr[index], el]).flat(1).filter(el => el !== 1).join('')
}

module.exports = {
  encodeLine
};
