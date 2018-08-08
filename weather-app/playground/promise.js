let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hey Oyelowo!, it worked!');
        reject('I\'m sorry, can\'t fulfill that promise');
    }, 3000)
});

myPromise.then((message) => console.log(message), (errorMessage) => {
    console.log("Error:", errorMessage);
});