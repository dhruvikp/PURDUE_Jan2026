const {fork} = require('child_process');

const child = fork('child1.js');

child.send("Hello child! calling from parent process");

child.on('message', (message) => {
    console.log(`Message from child: ${message}`);
});