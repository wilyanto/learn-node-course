var name = 'Wilyanto';
var age = 29;
var hasHobbies = true;

const summarizeUser = (userName, userAge, userHasHobby) => {
    return 'Name is ' + userName + ', age is ' + userAge + ', and the user has hobbyies: ' + userHasHobby;
}

const add = (a, b) => a + b;
const addOne = a => a + 1;
const addRandom = () => 1 + 2;

console.log(summarizeUser(name, age, hasHobbies));
console.log(add(1, 2));
console.log(addOne(1));
console.log(addRandom());