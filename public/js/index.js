var socket = io(); //initiating requeste from client to server and keep connection open
            //listen and send data
    socket.on('connect', function() {
        console.log('connected to server');
        
  
    });
    socket.on('disconnect', function () {
        console.log('disconnected from server!');
    });

    socket.on('newMessage', function (message){
      console.log('new Message', message);  
    })

    