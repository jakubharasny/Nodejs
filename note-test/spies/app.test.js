const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app') // load a file but through rewire and add two method below


describe('App', () => {
  var db = {
    saveUser: expect.createSpy()
  };
  app.__set__('db', db);

  it('should call the spy correctly', () => {
    var spy = expect.createSpy()
    spy('Andrew', 25);
    expect(spy).toHaveBeenCalledWith('Andrew', 25);
  });
  it('should call saveUser with user object', () => {
    var email = 'jake@example.com';
    var password ='habahabahaba';

    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({email, password});
  });

});