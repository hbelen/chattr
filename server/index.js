const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const path = require('path');
const socketIO = require('socket.io');

const PORT = process.env.PORT || 8000;

const app = express();
app.use(express.static(path.join(__dirname, '../dist/client')));

const Server = http.Server(app);
Server.listen(PORT, () => console.log(`Server running on ${PORT}`));

const io = socketIO(Server);
io.on('connection', socket => {console.log('Client has connected!')});