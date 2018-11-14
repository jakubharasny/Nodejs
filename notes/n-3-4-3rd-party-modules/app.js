console.log('Starting app.js');

const _ = require('lodash');

console.log(_.isString(true));

console.log(_.isString('Andrew'));

var filteredArray = _.uniq(['Andrew', 1, 'Andrew', 1, 2, 3, 4]);
console.log(filteredArray);


