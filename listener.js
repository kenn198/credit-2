const mqtt = require('mqtt');

// Connect to the MQTT broker
const client = mqtt.connect('mqtt://broker.hivemq.com');

// Subscribe to the necessary topics
client.on('connect', function () {
    console.log('Connected to MQTT broker');
    
    // Subscribe to all topics you want to listen to
    client.subscribe('alert/homeOwners', function (err) {
        if (!err) {
            console.log('Subscribed to home owners alerts');
        }
    });
});

// Handle incoming messages
client.on('message', function (topic, message) {
    const msg = message.toString();
    console.log(`${topic}: ${msg}`);
});
