const fs = require('fs');
const yargs = require('yargs')
const notes = require('./notes.js');

var titleOptions = {
    describe: "Title on note",
    demand: true,
    alias: 't'
}

var bodyOptions = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
}



const argv = yargs
    .command('add','Add a new node', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'List all notes')
    .command('read', 'read a note',{
        title: titleOptions
    })
    .command('remove', 'remove a note', {
        title: titleOptions
    })
    .help()
    .argv;

var command = argv._[0];

var logNote = (note) => {
console.log(`--------`);
console.log(`Title : ${note.title}`);
console.log(`Body : ${note.body}`); 
};

console.log('Command: ', command);
// console.log('Yargs', argv);

if  (command === 'add') {
    var note = notes.addNote(argv.title, argv.body)
    if (note) {
        console.log('New created note is:');
        notes.logNote(note);
    } else {
        console.log('Note title taken');   
    };
} else if (command === 'list') {
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'read') {
    var note = notes.readNote(argv.title);
    if (note) {
        console.log('The Note you were looking for is:');
        notes.logNote(note);
    } else {
        console.log('Note not found')
    };
} else if (command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? `Note ${argv.title} was removed` : "note doesn't exist";
    console.log(message);
} else {
    console.log('Not recognised');
}