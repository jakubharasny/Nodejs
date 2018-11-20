const utils = require('./utils');
const expect = require('expect');

describe('Utils', () => {
  describe('#add', () => {
    it('should add two number', () => {
      var res = utils.add(22, 15);
      expect(res).toBe(37);
      expect(res).toBeA('number', 'haba haba');
      // if (res!==44) {
      //   throw new Error(`Expected 44, but got ${res}`);
      // }
    });
    it('should be async and add two numbers', (done) => { // done tells mocha that this will asynchronous 
      utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
      });
    });
  });
  describe('#square', () => {
    it(' should square a number', () => {
      var res = utils.square(15);
      expect(res).toBe(225).toBeA('number');
    });
    it('it should be async and a square number', (done) => {
      utils.asyncSquare(5, (sick) => {
        expect(sick).toBe(25).toBeA('number');
        done();
      });
    });
  }); 
});

it('It should verify first and last names are set', () => {
  var user = { age: 33, location: 'London' }
  var res = utils.setName(user, 'Jakub Harasny');

  expect(user).toEqual(res); // !! some importand info, objects are passed by reference, so user is updated as well
  expect(res).toInclude({ firstName: 'Jakub', lastName: 'Harasny' });
});


// it('should expect some value', () => {
//   //expect(12).toNotBe(11);
//   expect({name:'Jake'}).toEqual({name:'Jake'}); // or toNotEqual
//   expect([2,3,4,5]).toInclude(5); // or toExclude
//   expect({
//     name: 'Jake',
//     age:33,
//     location: 'London'
//   }).toInclude({
//     age:33
//   })
// });