const { createClient } = require('minecraft-protocol');

const client = createClient({
  host: "your-aternos-server.aternos.me", // change this
  port: 19132,
  username: "AFK_Bot_123",
  version: "1.19.62"
});

client.on('connect', () => {
  console.log('Bot connected!');
});

client.on('disconnect', (reason) => {
  console.log('Bot disconnected:', reason);
});

client.on('error', (err) => {
  console.log('Bot error:', err);
});
