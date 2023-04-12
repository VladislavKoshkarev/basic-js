const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  s1Arr = s1.split('')
  s2Arr = s2.split('')
  commonCount = 0
  s1Arr.forEach(el => {
    if (s2Arr.includes(el)) {
      commonCount += 1
      delete s2Arr[s2Arr.indexOf(el)]
    }
  })
  return commonCount
}

module.exports = {
  getCommonCharacterCount
};
