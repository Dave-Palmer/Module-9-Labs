const express = require('express');
const app = express();
const http = require('http');
const { Server } = require("socket.io");
const server = http.createServer(app);
const io = new Server(server);

let users = []

function removeUser(username) {
    let indexNum = users.findIndex(user => user === username)
    if (indexNum === -1) { return }
    console.log(indexNum)
    users.splice(indexNum, 1)
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    // socket.broadcast.emit('connection', 'a user connected');

    socket.on('chat message', (msg) => {
        socket.broadcast.emit('chat message', msg)
    });

    socket.on('usernametest', (user) => {
        socket.username = user
        users.push(user)
        socket.broadcast.emit('usernameshow', user + ' is in chat')
        // console.log(users)
        io.emit('onlineUsers', users)
    });

    socket.on('typing', (data) => {
        socket.broadcast.emit('typing', data)
    });

    socket.on('disconnect', () => {
        socket.username ? socket.broadcast.emit('user left', socket.username) : {}
        removeUser(socket.username)
        io.emit('onlineUsers', users)
    });

});


server.listen(3000, () => {
    console.log('listening on *:3000');
});