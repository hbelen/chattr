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
io.on('connection', () => { console.log('Client has connected!'); }); // eslint-disable-line no-console
