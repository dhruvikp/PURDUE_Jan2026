

const cluster = require('cluster');

const os = require('os');

const numCPUs = os.cpus().length;

if(cluster.isMaster) {
    console.log(`Master process is running with PID: ${process.pid}`);

    for(let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died with code: ${code}, signal: ${signal}`);
        cluster.fork();
    })
} else {
    const express = require('express');
    const app = express();
    
    app.get('/', (req, res) => {
        res.send(`Hello from worker process with PID: ${process.pid}`);
    })
    
    app.listen(3000, () => {
        console.log(`Server is running on port 3000`);
    })
}



