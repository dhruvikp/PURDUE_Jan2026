const {execFile} = require('child_process');

execFile('node', ['child.js'], (error, stdout, stderr) => {
    console.log(`stdout: ${stdout}`);
});

