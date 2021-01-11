const person = {
    name: 'Wilyanto',
    age: 29,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
}

const hobbies = ['Sport', 'Programming'];

// SPREAD operator, extract all hobbies array into new []
const copiedArray = [...hobbies];

console.log(hobbies);
console.log(copiedArray);

// REST operator, merge all arguments into an array
const toArray = (...args) => {
    return args;
};

console.log(toArray(1, 2, 3, 4, 5));