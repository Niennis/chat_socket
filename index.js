var app = require('express')();
var express = require('express');
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;
var path = require('path');
var server = require('http').createServer(app);
// var io = require('../..')(server);

http.listen(port, function() {
  console.log('listening on *:' + port);
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
  var addedUser = false;
  
  socket.on('chat message', function(msg) {
    io.emit('chat message', msg);
  });
});


// -------------------------------------------------------------------------------

// // Setup basic express server
// var express = require('express');
// var app = express();
// var path = require('path');
// var server = require('http').createServer(app);
// var io = require('../..')(server);
// var port = process.env.PORT || 3000;

// server.listen(port, function () {
//   console.log('Server listening at port %d', port);
// });

// // Routing
// app.use(express.static(path.join(__dirname, 'public')));

// // Chatroom

// var numUsers = 0;

// io.on('connection', function (socket) {
//   var addedUser = false;
  

//   socket.on("join", function(name){
// 		people[socket.id] = name;
// 		socket.emit("update", "You have connected to the server.");
// 		socket.sockets.emit("update", name + " has joined the server.")
// 		socket.sockets.emit("update-people", people);
// 	});


//   $("#send").click(function() {
//     socket.emit("send", msg);
// });
// 	socket.on("send", function(msg){
//     socket.sockets.emit("chat", people[socket.id], msg);
    
// 	});

// 	socket.on("disconnect", function(){
// 		socket.sockets.emit("update", people[socket.id] + " has left the server.");
// 		delete people[socket.id];
// 		socket.sockets.emit("update-people", people);
// 	});
// });
  
// // For DEMO compatibility  
// socket.on('chat message', function(msg){
//   io.emit('chat message', msg);
// });

// when the client emits 'new message', this listens and executes
// socket.on('new message', function (data) {
//   // we tell the client to execute 'new message'
//   socket.broadcast.emit('new message', {
//     username: socket.username,
//     message: data
//   });
// });

// // when the client emits 'add user', this listens and executes
// socket.on('add user', function (username) {
//   if (addedUser) return;

  
//   // we store the username in the socket session for this client
//   socket.username = username;
//   ++numUsers;
//   addedUser = true;
//   socket.emit('login', {
//     numUsers: numUsers
//   });
//   // echo globally (all clients) that a person has connected
//   socket.broadcast.emit('user joined', {
//     username: socket.username,
//     numUsers: numUsers
//   });
// });

// // when the client emits 'typing', we broadcast it to others
// socket.on('typing', function () {
//   socket.broadcast.emit('typing', {
//     username: socket.username
//   });
// });

// // when the client emits 'stop typing', we broadcast it to others
// socket.on('stop typing', function () {
//   socket.broadcast.emit('stop typing', {
//     username: socket.username
//   });
// });

// // when the user disconnects.. perform this
// socket.on('disconnect', function () {
//   if (addedUser) {
//     --numUsers;

//     // echo globally that this client has left
//     socket.broadcast.emit('user left', {
//       username: socket.username,
//       numUsers: numUsers
//     });
//   }
//   });
// });
