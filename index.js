let name = 'Stan ';
const rate = 1;
console.log(name);

let person = {
    name: 'Stian',
    age: 20
};

person.name = 'John';

let selection = 'name';
person[selection] = 'Mary';

console.log(person.name)

let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
console.log(selectedColors)

function greet(name) {
    console.log('Hello', name);
}

greet('Stan');