const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const path = require('path');
const socketIO = require('socket.io');

const PORT = process.env.PORT || 8000;

const app = express();
app.use(express.static(path.join(__dirname, '../dist/client')));
app.use(bodyParser.json());

const Server = http.Server(app);
Server.listen(PORT, () => console.log(`Server running on ${PORT}`)); // eslint-disable-line no-console

const io = socketIO(Server);
const clients = {};

io.on('connection', (socket) => {
  clients[socket.id] = { id: socket.id };
  console.log(`Client ${socket.id} connected`); // eslint-disable-line no-console

  socket.on('disconnect', () => {
    delete clients[socket.id];
    console.log(`Client ${socket.id} disconnected`); // eslint-disable-line no-console
  });

  socket.on('login', (data) => {
    clients[socket.id].role = data.role;
    console.log(`Client ${socket.id} got role '${data.role}'`); // eslint-disable-line no-console
  });
});
