process.on('message', (message) => {
    console.log(`Message from parent: ${message}`);
    process.send("Hello parent! calling from child process");
});