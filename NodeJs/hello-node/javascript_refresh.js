/*
const obj = {
    name: "John",
    greet: function() {
        setTimeout(() => {
            console.log(`Hello, my name is ${this.name}`);
        }, 1000);
    }
}

obj.greet();

function Person(name) {
    this.name = name;
    this.greet = function() {
        setTimeout(() => {
            console.log(`Hello, my name is ${this.name}`);
        }, 1000);
    }
}

const person1 = new Person("Alice");
person1.greet();

class Person1{
    constructor(name) {
        this.name = name;
    }

    greet() {
        setTimeout(() => {
            console.log(`Hello, my name is ${this.name}`);
        }, 1000);
    }       
}


function multiply(a, b) {
    return a * b;
}

const result = multiply(5, 3);
console.log("Result of multiplication:", result);

// pass by reference example
function modifyObject(obj) {
    obj.name = "Modified Name";
}

const myObj = { name: "Original Name" };
console.log("Before modification:", myObj);
modifyObject(myObj);
console.log("After modification:", myObj);

// pass by value example
function modifyPrimitive(value) {
    value = 100;
}

let myValue = 50;
console.log("Before modification:", myValue);
modifyPrimitive(myValue);
console.log("After modification:", myValue);


(function(name) {
    console.log(`This is an IIFE (Immediately Invoked Function Expression). Hello, ${name}!`);
})("Alice");


// count private to IIFE
const counter = (function() {
    let count = 0;

    return {
        increment: function() {
            count++;
            console.log("Count:", count);
        },
        decrement: function() {
            count--;
            console.log("Count:", count);
        },
        getCount: function() {
            return count;
        }
    };
})();

counter.increment();
*/



const person = {
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const person1 = Object.create(person);
person1.name = "Alice";
person1.greet();

const animal = {
    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

const dog = Object.create(animal);
dog.name = "Buddy";
dog.speak();

function Persion2(name) {
    this.name = name;
}

console.log("Person2 prototype:", Persion2.prototype);

Persion2.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
}

const person2 = new Persion2("Bob");
person2.greet();


function greet(city) {
    console.log(`Hello, my name is ${this.name} and I live in ${city}`);
}

const person3 = {
    name: "Charlie"
}


greet.apply(person3, ["New York"]);

// bind example
const boundGreet = greet.bind(person3);
boundGreet("Los Angeles");  