const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 let season = [
  'winter',
  'winter',
  'winter',
  'spring',
  'spring',
  'spring',
  'summer',
  'summer',
  'summer',
  'autumn',
  'autumn',
  'autumn',
  ]
   
  function getSeason( date ) {
    season.forEach((e) => {
      if (e === date) {
        return e
      }
    })
   let res = date.getMonth()
   return season[res+1]
  }

module.exports = {
  getSeason
};
