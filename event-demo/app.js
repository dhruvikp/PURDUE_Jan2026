
const EventEmitter = require('events');

// create emitter
const emitter = new EventEmitter();

emitter.on('orderPlaced', (order) => {
    console.log('Order received:', order);
    // Simulate processing the order
    setTimeout(() => {
        console.log('Order processed:', order);
        emitter.emit('paymentSuccess', order);
    }, 2000);
});

emitter.on('paymentSuccess', (order) => {
    console.log('Payment successful for order:', order);
    // Simulate shipping the order
    setTimeout(() => {
        // trigger two events: sendEmail and updateInventory
        emitter.emit('sendEmail', order);
        emitter.emit('updateInventory', order);
    }, 2000);
});

emitter.on('sendEmail', (order) => {
    console.log('Sending email for order:', order);
    // Simulate email sending
    setTimeout(() => {
        console.log('Email sent for order:', order);
    }, 1000);
});

emitter.on('updateInventory', (order) => {
    console.log('Updating inventory for order:', order);
    // Simulate inventory update
    setTimeout(() => {
        console.log('Inventory updated for order:', order);
    }, 1000);
});

function placeOrder(order) {
    console.log('Placing order...');

    console.log('Order placed:', order);
    emitter.emit('orderPlaced', order);
}

const order = {
    id: 1,
    item: 'Laptop',
    quantity: 1
};

placeOrder(order);