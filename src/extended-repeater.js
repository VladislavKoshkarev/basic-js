const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = ''
  let add = ''
  let sep = '+'
  let rep = 1
  let addRep = 1
  if ('additionRepeatTimes' in options) addRep = options.additionRepeatTimes
  if ('repeatTimes' in options) rep = options.repeatTimes
  if ('addition' in options) {
    let addSep = '|'
    if ('additionSeparator' in options) addSep = options.additionSeparator.toString()
    for (let i = 0; i < addRep; i++) {
      add += String(options.addition) + addSep
    }
    add = add.slice(0, add.length - addSep.length)
  }
  if ('separator' in options) {
    sep = options.separator.toString()
  }
  for (let i = 0; i < rep; i++) {
    result += str + add + sep
  }
  return result.split('').slice(0, result.length - sep.length).join('')
}

module.exports = {
  repeater
};
