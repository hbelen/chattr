import io from 'socket.io-client';
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(
  App,
  document.getElementById('root'),
);

const SERVER_IP = 'http://localhost:8000';
const socket = io(SERVER_IP);

const roles = {
  ADMIN: 'admin',
  USER: 'user',
};

socket.emit('login', {
  role: Math.random() >= 0.5 ? roles.ADMIN : roles.USER,
});
