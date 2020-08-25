const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const Routes = require('./routes');
const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');

const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = socketio(server);             //now the server will listen for realtime data
//io is the realtime server

//now the server is listening for any connection from clients
//socket argument here represent different clients that are connecting to this server
io.on('connection' , socket => {
    console.log('We have a new connection');

    //when a client join
    socket.on('join' , ({ name, room}, callback)=>{
        console.log(name, room);
        const { error , user } = addUser({ id: socket.id, name , room });

        if(error) 
        return callback(error);

        //welcome message
        socket.emit('message' , { user: 'admin' , text: `${user.name}, welcome to the room ${user.room}`});
        socket.broadcast.to(user.room).emit('message' , { user: 'admin' , text: `${user.name} has joined the room` });

        socket.join(user.room);
    });

    //user/client send message
    socket.on('sendMessage' , (message, callback)=>{
        const user = getUser(socket.id);

        //send it to everone in that room
        io.to(user.room).emit('message' , { user: user.name , text: message });

        callback(); //to reset the message to ''
    });

    //when a client discconect
    socket.on('disconnect' , ()=>{
        console.log("One user has left");
        removeUser(socket.id);
    });
});


app.use(Routes);

server.listen(PORT , ()=>{
    console.log(`the server is active at ${PORT}`);
});