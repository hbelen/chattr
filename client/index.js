import io from 'socket.io-client';

const SERVER_IP = 'http://localhost:8000';
const socket = io(SERVER_IP);
