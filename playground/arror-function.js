var square = x => x * x;

console.log(square(9));

var user = {
    name:'Jakub',
    sayHi: (...anything) => {
        console.log(anything)
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    },
    sayHiAlt () {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    }    
};

user.sayHi('a', 'b');
// user.sayHiAlt('a','b');