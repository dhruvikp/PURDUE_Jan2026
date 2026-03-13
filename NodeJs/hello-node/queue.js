
console.log("Starting the queue example...");

setTimeout(() => {
  console.log("This is a delayed message from the queue.");
}, 2000);

Promise.resolve().then(() => {
  console.log("This is a message from the microtask queue.");
});


console.log("This message is logged immediately.");

const fs = require('fs');

fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File content:", data);
});

console.log("This message is logged while waiting for the file read operation.");

setImmediate(() => {
  console.log("This is a message from the check phase of the event loop.");
});