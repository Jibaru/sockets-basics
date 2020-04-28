var socket = io();
socket.on('connect', function(){
	console.log('Conectado al servidor');
});

// Escuchar sucesos
socket.on('disconnect', function(){
	console.log('perdimos conexion con el servidor');
});

// Enviar información
socket.emit('enviarMensaje', {
	usuario: 'Fernando',
	mensaje: 'Hola mundo'
}, function(resp){
	console.log('Respuesta server: ', resp);
});

// Escuchar información
socket.on('enviarMensaje', function(resp){
	console.log('Servidor: ', resp);
});