const mqtt = require('mqtt');

// Connect to the MQTT broker
const client = mqtt.connect('mqtt://broker.hivemq.com');

// Subscribe to the necessary topics
client.on('connect', function () {
    console.log('Connected to MQTT broker');
    
    client.subscribe('alert/fireService', function (err) {
        if (!err) {
            console.log('Subscribed to fire service alerts');
        }
    });
});

// Handle incoming messages
client.on('message', function (topic, message) {
    const msg = message.toString();
    console.log(`${topic}: ${msg}`);
});
