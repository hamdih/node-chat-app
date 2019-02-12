const path = require('path');
const express = require('express');
var publicPath = path.join(__dirname ,'../public'); 
const socketIO = require('socket.io');
const http = require('http');

var app = express();
var port = process.env.PORT || 3000;
var server = http.createServer(app);
var io = socketIO(server); // get back web socket server listening and emitting events


app.use(express.static(publicPath));

io.on('connection', (socket)=>{ //individual socket connected through js script in index
    console.log('New user connected');
    
    socket.on('disconnect', ()=>{
        console.log('User disconnected');
    })
    
    socket.emit('newMessage', {   //send from server to client
        from:"naty.com",
        text: "whats up",
        createdAt:1321
    });

    socket.on('createMessage',(createMessage)=>{

        console.log('createMessage', createMessage);
    })
})   //register an event listener




// app.get('/', (req,res)=>{
//     res.sendFile(publicPath + '/index.html');
// })

server.listen(port, ()=>{
	console.log(`Started on port ${port}`);
});