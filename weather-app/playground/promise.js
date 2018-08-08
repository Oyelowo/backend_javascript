let myPromise = new Promise((resolve, reject) => {
    resolve('Hey Oyelowo!, it worked!');
});

myPromise.then((message) => console.log(message));