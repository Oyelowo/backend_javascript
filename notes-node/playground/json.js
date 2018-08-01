let obj = {
    name: 'Oyelowo'
}

let stringObj = JSON.stringify(obj);
console.log(typeof stringObj);
console.log(stringObj);


let personString = '{"name": "Oyelowo","Age": "24"}';

let personObj = JSON.parse(personString);
console.log(typeof personObj);
console.log(personObj);