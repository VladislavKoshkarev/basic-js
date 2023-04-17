const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor() {
    this.depth = 1
  }
  calculateDepth(arr, initialDepth = 1) {
    let deepestPosition = initialDepth
    arr.forEach(array => { 
      let innerDepth = 1
      if (Array.isArray(array)) {
      innerDepth += this.calculateDepth(array)
      if (deepestPosition < innerDepth) deepestPosition = innerDepth
    }})
    return deepestPosition
  }
}

module.exports = {
  DepthCalculator
};
