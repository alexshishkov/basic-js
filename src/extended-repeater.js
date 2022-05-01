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
function repeater( str, options ) {
  if (options.separator === undefined) {
    options.separator = '+'
}
if (options.additionSeparator === undefined) {
    options.additionSeparator = '|'
}
if (options.additionRepeatTimes === undefined) {
    options.additionRepeatTimes = 1;
}
let arr = []
let arrAddation = []
for (let i = 0; i < options.additionRepeatTimes; i++) {
  arrAddation.push(options.addition)
}
let additionStr = arrAddation.join(options.additionSeparator)

for (let i = 0; i < options.repeatTimes; i++) {
  arr.push(str + additionStr)
}
let res = arr.join().replace(/[\s.,%]/g, options.separator)
return res
}


console.log(repeater( 'STRING', { repeatTimes: 3, separator: '**', 
addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' } ))

module.exports = {
  repeater
};
