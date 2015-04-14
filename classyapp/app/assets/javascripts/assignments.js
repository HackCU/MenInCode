$(document).ready(function(){
	
	var socket = io('/s/socket.io');
	$('form').submit(function(){
		socket.emit('chat message', $('textarea').val());
		$('textarea').val('');
		return false;
	});
	socket.on('chat message', function(msg){
		$('#leftAss').append($('<li>').text(msg));
	});

});
