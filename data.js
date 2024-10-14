const mqtt = require('mqtt');
const client  = mqtt.connect('mqtt://broker.hivemq.com'); // Connect to an MQTT broker

client.on('connect', () => {
  console.log('Connected to MQTT broker');

  setInterval(() => {
    const heat = Math.random() * (70 - 20) + 20; // Heat sensor (20 - 50 °C)
    const smoke = Math.random() < 0.3; // Smoke sensor (true/false)
    const fire = Math.random() < 0.1;  // Fire sensor (true/false)
    const humidity = Math.random() * 100; // Humidity sensor (0 - 100%)

    // Publishing sensor data to different topics
    client.publish('forest/heat', JSON.stringify({ value: heat, timestamp: new Date() }));
    client.publish('forest/smoke', JSON.stringify({ value: smoke, timestamp: new Date() }));
    client.publish('forest/fire', JSON.stringify({ value: fire, timestamp: new Date() }));
    client.publish('forest/humidity', JSON.stringify({ value: humidity, timestamp: new Date() }));
  }, 2000); // Send data every 5 seconds
});