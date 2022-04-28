const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight( arr ) {
  // remove line with error and write your code here
  let arr2 =[]
 for (let i = 0; i < arr.length; i++) {
     if (arr[i] != -1) {
       arr2.push(arr[i])
     }
   }
  let res = arr2.sort(function(a, b) {
 return a - b;
})
for (let i = 0; i < arr.length; ++i) {
 if (arr[i] === -1) {
   res.splice(i, 0, -1)
 }
}
   return  res 
}


module.exports = {
  sortByHeight
};
