console.log("Node version:", process.version);
console.log("Node platform:", process.platform);
const processId = process.pid;
console.log("Process ID:", processId);

console.log(process.argv)


const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.on('greet', (name) => {
  console.log(`Hello, ${name}!`);
});


myEmitter.emit('greet', 'Dhruvik');


process.on("beforeExit", (code) => {
  console.log("Process is about to exit with code:", code);
});


process.on("disconnect", () => {
  console.log("Process disconnected");
});

process.on("exit", (code) => {
  console.log("Process exited with code:", code);
});


process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
  process.exit(1);
});

throw new Error("This is an uncaught exception");