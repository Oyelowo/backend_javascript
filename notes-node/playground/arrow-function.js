let square = x => x * x;

console.log(square(9));

let student = {
    name: 'Oyelowo',
    sayHello(){
        console.log(`Hello, I am ${this.name}`);
    }
};


student.sayHello();