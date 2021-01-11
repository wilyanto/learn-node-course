const person = {
    name: 'Wilyanto',
    age: 29,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
}

const hobbies = ['Sport', 8];

// Reference type
hobbies.push('Programming');
console.log(hobbies);