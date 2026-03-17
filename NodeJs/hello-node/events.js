const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('greet', () => {
    console.log("Hello, Alice!");
});

emitter.emit('greet');

// userLogin event with data
emitter.on('userLogin', (username) => {
    console.log(`User ${username} has logged in.`);
});

emitter.emit('userLogin', 'Bob');

// multiple listeners for the same event - orderPlaced

emitter.on('orderPlaced', (orderId) => {
    console.log(`Order ${orderId} has been placed.`);
});

emitter.on('orderPlaced', (orderId) => {
    console.log(`Sending confirmation email for order ${orderId}.`);
});

emitter.emit('orderPlaced', '12345');

// error event
emitter.on('error', (err) => {
    console.error("An error occurred:", err.message);
});

// once event emitter example
emitter.once('dataReceived', (data) => {
    console.log("Data received:", data);
});

emitter.emit('dataReceived', 'Sample data 1');
emitter.emit('dataReceived', 'Sample data 2'); // This will not trigger the listener

//  Removing event listeners  using off() method
function onUserLogout(username) {
    console.log(`User ${username} has logged out.`);
}

emitter.on('userLogout', onUserLogout);

emitter.emit('userLogout', 'Charlie');

// Remove the event listener
emitter.off('userLogout', onUserLogout);

emitter.emit('userLogout', 'Charlie'); // This will not trigger the listener

// removeListeners example
function onOrderShipped(orderId) {
    console.log(`Order ${orderId} has been shipped.`);
}

emitter.on('orderShipped', onOrderShipped);

emitter.emit('orderShipped', '54321');

emitter.removeListener('orderShipped', onOrderShipped);

emitter.emit('orderShipped', '54321'); // This will not trigger the listener