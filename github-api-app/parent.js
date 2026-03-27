const {spawn} = require('child_process');

const child = spawn('node', ['child.js']);


child.stdout.on('data', (data) => {
  console.log(`Child stdout: ${data}`);
});

child.stderr.on('data', (data) => {
  console.error(`Child stderr: ${data}`);
});