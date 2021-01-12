const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done');
        }, 1500);
    });
    return promise;
}

// Async
setTimeout(() => {
    console.log('Timer is done');
    fetchData().then(text => {
        console.log(text);
        return fetchData();
    })
    .then(text2 => {
        console.log(text2);
    });
}, 2000);

const name = 'a';
const age = 2;

// Template literals, using `` instead of '' or ""
console.log(`name is ${name}, aged ${age}`);