//Importamos las librerías que utilizaremos.
var express=require('express');
var path=require('path');

//Instanciamos express.
var app=express();

//Definimos el puerto a utilizar.
var puerto=7000;

//Definimos los recursos estaticos (páginas) a trabajar en el proyecto.
app.use(express.static(path.join(__dirname,'public')));

//Definimos rutas.
app.get('/', function(req, res){
	res.sendFile(__dirname+'/public/index.html');
});

//Iniciamos el puerto
app.listen(puerto, function(){
	console.log('Servidor iniciado en el puerto: '+puerto);
});