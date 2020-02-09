const express = require('express');
const { Client } = require('pg');
const redis = require('redis');
const redisClient = redis.createClient({host: 'devops_tp_pipeline'});

// Constants
const PORT = 8080;
const pg = new Client({
  user: "root",
  password: "password",
  host: "postgres",
  database: "myDB",
  port: 5432,
});

// App
const app = express();
app.get('/', (req, res) => {
  res.send({ "message": "Hello World !" });

});
app.get('/api', (req, res) => {
  res.send( { "message": "Hello World" });
});
app.get('/status', async (req, res) => {
  res.json({
    status: 'ok',
    postgresUptime: uptimeString(),
    redisConnectedClients: Number(redisClient.server_info.connected_clients)
  })
});

pg.connect();
app.listen(PORT);
console.log('server on port : '+ PORT);
