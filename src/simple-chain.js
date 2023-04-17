const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chainArray: [],
  getLength() {
    return this.chainArray.length
  },
  addLink(value) {
    let additionLink = ''
    if (value) additionLink = value
    this.chainArray.push(`( ${value} )`)
    return this
  },
  removeLink(position) {
    if (position > this.getLength() || typeof position !== 'number' || this.getLength() < 1 || !(Number.isInteger(position)) || position < 1 ) {
      this.chainArray = []
      throw new Error(`You can't remove incorrect link!`)
    } else {
      this.chainArray.splice(position - 1, 1);
      return this
    }

  },
  reverseChain() {
    this.chainArray.reverse()
    return this
  },
  finishChain() {
    let finalChain = this.chainArray.join('~~')
    this.chainArray = []
    return finalChain
  }
};

module.exports = {
  chainMaker
};
