import io from 'socket.io-client';

const SERVER_IP = 'http://localhost:8000';
const socket = io(SERVER_IP);

const roles = {
  ADMIN: 'admin',
  USER: 'user',
};

socket.emit('login', {
  role: Math.random() >= 0.5 ? roles.ADMIN : roles.USER,
});
