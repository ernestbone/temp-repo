// Modules
// commonJS, every file is module(by default)
// Modules - Encapsulated code (only share minimum)

const names = require('./4-names');
const sayHi = require('./5-utils')
console.log(names)

require('./7-mind-greenade')

sayHi(names.ernest)
sayHi(names.flora)
sayHi(names.grand)