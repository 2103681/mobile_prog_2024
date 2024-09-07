// Sept 7 2024

const person = {
    name: 'John',
    age: 25,
    hobbies: ['reading', 'cooking'],
    greet: function() {
        console.log('Hello, my name is ' + this.name + ' and I am ' + this.age + ' years old.');
    }
};

// When to use destructuring?
// Destructuring is useful when you only need specific properties of an object.

// Regular function
const printName = (personData) => {
    console.log(personData.name);
};

printName(person);

// Destructuring the object
const printNameDestructured = ({ name }) => {
    console.log(name);
};

printNameDestructured(person);

// Destructuring the object to extract multiple properties
const { name, age } = person;
console.log(name, age);

// Destructuring arrays
const hobbies = ['reading', 'cooking'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);

/* Reminders when using destructuring:
- The property names must match the object property names.
- The property names must be enclosed in curly braces for objects.
- No colon is needed for object destructuring in function parameters.
*/
