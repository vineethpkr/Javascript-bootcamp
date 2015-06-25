var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var msg="Jollo";
var users = new Array();
var no_of_users=0;
var count =0 ;
app.get('/',function(req,res){
	res.sendFile(__dirname + '/index.html');
	
});

app.get('/game', function (req, res) {
  res.send('Hello World!');
});

io.on('connection',function(socket){

	users.push(socket.id);
	console.log(socket.id+"-user connected");
	/*socket.emit('chatmessage',msg);
	socket.on('update',function(msg){
		console.log('message:' + msg);
		
	});*/
	socket.on('roomcheck',function(msg){
			console.log("Entered js roomcheck");
			console.log("roomCheck"+ msg.roomId + "in " + msg.socketId);
			socket.join(msg.roomId);

	});
	socket.on('check2player',function(msg){

			console.log("Entered check2player");
			console.log("Room is "+msg.roomId);
			no_of_users = io.sockets.sockets.length;
			console.log("Clients : "+no_of_users);
			if(no_of_users < 2 )
				{
						console.log("Waiting for another player");
				}
			else if (no_of_users == 2)
				{
						console.log("Starting Game...");
						socket.emit('startgame');
						console.log(no_of_users);
				}


	});
	socket.on('startanother',function(msg){

			console.log("Entered Start ANother");
			// console.log(" SENT socketId" + msg.sid);
			socket.broadcast.emit('game');
			// window.location = 'http://127.0.0.1/xampp/TicTacToe/';

	});
	socket.on('match',function(msg){

			console.log("started match");
			console.log(msg.pos);
			console.log(msg.player);
			count = count +1;
			console.log(count);
			socket.broadcast.emit('move',{content1: msg, count:count});
	});
	socket.on('winner',function(msg){

			console.log("in winner" + msg);
			socket.broadcast.emit('over');
			count=0;
	});
	socket.on('reset',function(){
		count=0;
		socket.broadcast.emit('again',count);
	});
	
});

  
http.listen(3000,function(){
	
	console.log('listening on *:3000');
});
