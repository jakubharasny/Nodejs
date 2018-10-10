console.log('Starting app.');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

console.log('Result: 'notes.add(4,5));

// var user = os.userInfo();

// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}` , function (err){
//     if (err) {
//         console.log('Unable to write to file');
//     }
// });

