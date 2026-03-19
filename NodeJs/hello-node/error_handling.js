

// let data;

// try {
//     data = JSON.parse('invalid json');
// } catch (error) {
//     console.error('Error parsing JSON:', error.message);
// }

// console.log("END OF FILE");


// setTimeout(() => {
//     try {
//         throw new Error("Something went wrong in the timeout!");
//     } catch (error) {
//         console.error('Error in timeout:', error.message);
//     }
// }, 1000);

// console.log("This will run before the timeout error is caught.");


// Single callback example fs.readFile

// const fs = require('fs');

// fs.readFile('input.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error('Error reading file:', err.message);
//         return;
//     }
//     console.log('File contents:', data);
// });

// console.log("This will run before the file read operation completes.");


// callback chains problem example, fs.readFile with nested callbacks

// const fs = require('fs');

// fs.readFile('input1.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error('Error reading file:', err.message);
//         return;
//     }
//     console.log('File contents:', data);

//     fs.writeFile('output.txt', data.toUpperCase(), (err) => {
//         if (err) {
//             console.error('Error writing file:', err.message);
//             return;
//         }
//         console.log('File written successfully.');

//         fs.readFile('output.txt', 'utf8', (err, outputData) => {
//             if (err) {
//                 console.error('Error reading output file:', err.message);
//                 return;
//             }
//             console.log('Output file contents:', outputData);
//         });
//     });
// });

// console.log("This will run before any of the file operations complete.");

// using async librarry parallel example, timeout with error handling

// const async = require('async');
// async.parallel([
//     (callback) => {
//         setTimeout(() => {
//             callback(new Error("Error in first task!"));
//         }, 1000);
//     },
//     (callback) => {
//         setTimeout(() => {
//             callback(null, "Second task completed successfully.");
//         }, 1500);
//     }

// ], (err, results) => {
//     if (err) {
//         console.error('Error in parallel tasks:', err.message);
//         return;
//     }
//     console.log('Parallel tasks results:', results);
// });

// console.log("This will run before the parallel tasks complete.");

// handling error using promises example

// const fs = require('fs').promises;

// fs.readFile('input.txt', 'utf8')
//     .then(data => {
//         console.log('File contents:', data);
//         return fs.writeFile('output.txt', data.toUpperCase());
//     })
//     .then(() => {
//         console.log('File written successfully.');
//         return fs.readFile('output.txt', 'utf8');
//     })
//     .then(outputData => {
//         console.log('Output file contents:', outputData);
//     })
//     .catch(err => {
//         console.error('Error during file operations:', err.message);
//     });

// console.log("This will run before any of the file operations complete.");

// Handle error using EventEmitter example

// const EventEmitter = require('events');

// function createTimer() {
//     const timer = new EventEmitter();

//     setTimeout(() => {
//         timer.emit('tick');
//     }, 5000);

//     return timer;   
// }

// const myTimer = createTimer();

// myTimer.on('tick', () => {
//     console.log("Timer ticked!");
// });

// myTimer.on('error', (error) => {
//     console.error('Error in timer:', error.message);
// });

// // Simulate an error in the timer after 3 seconds
// setTimeout(() => {
//     myTimer.emit('error', new Error("Something went wrong with the timer!"));
// }, 3000);

// console.log("This will run before the timer ticks or encounters an error.");