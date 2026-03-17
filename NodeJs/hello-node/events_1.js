
const EventEmitter = require('events');

function createTimer() {
    const timer = new EventEmitter();


    setTimeout(() => {timer.emit('tick');
    }, 5000);

    return timer;   
}

const myTimer = createTimer();

myTimer.on('tick', () => {
    console.log("Timer ticked!");
});

// downloadfile simple  example, 50% download complete, 100% download complete

function downloadFile() {
    const downloader = new EventEmitter();

    setTimeout(() => {
        downloader.emit('progress', 50);
    }, 2000);

    setTimeout(() => {
        downloader.emit('progress', 100);
    }, 4000);

    return downloader;
}

const fileDownloader = downloadFile();

fileDownloader.on('progress', (percentage) => {
    console.log(`Download progress: ${percentage}%`);
});

// Logger extends EventEmitter example

class Logger extends EventEmitter {
    log(message) {
        console.log(message);
        this.emit('logged', { message, timestamp: new Date() });
    }
}

const logger = new Logger();

logger.on('logged', (data) => {
    console.log(`Message logged at ${data.timestamp}: ${data.message}`);
});

logger.log("This is a log message.");