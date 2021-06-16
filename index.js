/**
 * [Exercise 1] trimProperties copies an object trimming its properties
 * @param {object} obj - an object with properties that are strings
 * @returns {object} - a copy of the object with strings trimmed
 *
 * EXAMPLE
 * trimProperties({ name: '  jane  ' }) // returns a new object { name: 'jane' }
 */
function trimProperties(obj) {
  const newObj = {}
  for (const key in obj){
    newObj[key] = obj[key].trim();
  }
  return newObj
}


/**
 * [Exercise 2] trimPropertiesMutation trims in place the properties of an object
 * @param {object} obj - an object with properties that are strings
 * @returns {object} - the same object with strings trimmed
 *
 * EXAMPLE
 * trimPropertiesMutation({ name: '  jane  ' }) // returns the object mutated in place { name: 'jane' }
 */

function trimPropertiesMutation(obj) {
  for (const key in obj){
    obj[key] = obj[key].trim();
  }
  return obj
}



/**
 * [Exercise 3] findLargestInteger finds the largest integer in an array of objects { integer: 1 }
 * @param {object[]} integers - an array of objects
 * @returns {number} - the largest integer
 *
 * EXAMPLE
 * findLargestInteger([{ integer: 1 }, { integer: 3 }, { integer: 2 }]) // returns 3
 */
 function findLargestInteger(integers) {
   return integers.reduce( function(acc,current){
       if (acc.integer > current.integer) {
          return acc
       } else { return current}
    }).integer
}

console.log(findLargestInteger([{ integer: 1 }, { integer: 3 }, { integer: 2 }]))

class Counter {
  constructor(initialNumber) {
    this.count = initialNumber;
  }
  countDown() {
    return this.count > 0 ? this.count-- : 0;
  }
}

console.log()

class Seasons {
  constructor() {
    this.seasons = ['summer', 'fall', 'winter', 'spring'];
    this.currentSeason = 0;
  }
  next() {
    const result = this.seasons[this.currentSeason];
    if (this.currentSeason === 3) {
      this.currentSeason = 0;
    } else {
      ++this.currentSeason;
    }
    return result;
  }
}

class Car {
  constructor(name, tankSize, mpg) {
    this.odometer = 0;
    this.tank = tankSize;
    this.tankSize = tankSize;
    this.mpg = mpg;
  }
  drive(distance) {
    const milesCanDrive = this.tank * this.mpg;
    if (distance <= milesCanDrive) {
      this.odometer = this.odometer + distance
      this.tank = this.tank - (distance / this.mpg)
    } else {
      this.tank = 0;
      this.odometer = this.odometer + milesCanDrive;
    }
    return this.odometer;
  }

  refuel(gallons) {
    if (gallons <= this.tankSize - this.tank) {
      this.tank = this.tank + gallons
    } else {
      this.tank = this.tankSize
    }
    return this.tank * this.mpg
  }
}

/**
 * [Exercise 7] Asynchronously resolves whether a number is even
 * @param {number} number - the number to test for evenness
 * @returns {promise} - resolves true if number even, false otherwise
 *
 * EXAMPLE
 * isEvenNumberAsync(2).then(result => {
 *    // result is true
 * })
 * isEvenNumberAsync(3).then(result => {
 *    // result is false
 * })
 * isEvenNumberAsync('foo').catch(error => {
 *    // error.message is "number must be a number"
 * })
 * isEvenNumberAsync(NaN).catch(error => {
 *    // error.message is "number must be a number"
 * })
 */
function isEvenNumberAsync(number) {
  if (typeof number !== 'number' || isNaN(number)) {
    throw new Error('number must be a number');
  }
  return number % 2 === 0 || false;
}

module.exports = {
  trimProperties,
  trimPropertiesMutation,
  findLargestInteger,
  isEvenNumberAsync,
  Counter,
  Seasons,
  Car,
}
