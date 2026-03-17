
const math = require('./math');



const result = math.add(5, 3);
console.log(`The sum of 5 and 3 is: ${result}`);

const difference = math.subtract(10, 4);
console.log(`The difference between 10 and 4 is: ${difference}`);

const product = math.multiply(6, 7);
console.log(`The product of 6 and 7 is: ${product}`);

try {
    const quotient = math.divide(20, 5);
    console.log(`The quotient of 20 and 5 is: ${quotient}`);
} catch (error) {
    console.error(error.message);
}

try {
    const quotient = math.divide(10, 0);
    console.log(`The quotient of 10 and 0 is: ${quotient}`);
} catch (error) {
    console.error(error.message);
}


const Person = require('./Person');

const person1 = new Person("Alice", 30);
person1.greet();

const User = require('./User');

const user1 = new User("Bob", "bob@example.com");
user1.greet();


const config = require('./config');

const dbConfig = config();

console.log("Database Configuration:");
console.log(`Host: ${dbConfig.host}`);
console.log(`Port: ${dbConfig.port}`);
console.log(`User: ${dbConfig.user}`);
console.log(`Password: ${dbConfig.password}`);