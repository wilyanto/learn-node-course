const person = {
    name: 'Wilyanto',
    age: 29,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
}

const printName = ({ name, age }) => {
    console.log(name);
}

printName(person);

// Destructuring
const {name, age} = person;

console.log(age);

const hobbies = ['Sports', 'Programming'];

const [hobby1, hobby2] = hobbies;

console.log(hobby1, hobby2);