const person = {
    name: 'Wilyanto',
    age: 29,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
}

const hobbies = ['Sport', 8];

// For each
hobbies.forEach(hobby => {
    console.log(hobby)
});

// Map array
console.log(hobbies.map(hobby => {
    return 'Hobby: ' + hobby;
}));