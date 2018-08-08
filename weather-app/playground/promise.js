let asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject('Arguments must  be numbers');
            }
        }, 2000);
    })
}

let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hey Oyelowo!, it worked!');
        reject('I\'m sorry, can\'t fulfill that promise');
    }, 3000)
});

myPromise.then((message) => console.log(message), (errorMessage) => {
    console.log("Error:", errorMessage);
});