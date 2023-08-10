function sumar() {
var num1 = parseInt(document.getElementById("num1").value); //
var num2 = parseInt(document.getElementById("num2").value);
var resultado = num1 + num2; //se hace una variable llamada resultado, el cual es la suma de las variables
alert("El resultado de la suma es: "+ resultado); 
}

function restar() {
var num1 = parseInt(document.getElementById("num1").value); 
var num2 = parseInt(document.getElementById("num2").value);
var resultado = num1 - num2; 
alert("El resultado de la resta es: "+ resultado); 
}

function multi() {
var num1 = parseInt(document.getElementById("num1").value); 
var num2 = parseInt(document.getElementById("num2").value);
var resultado = num1 * num2; 
alert("El resultado de la multiplicación es: "+ resultado); 
}

function div() {
var num1 = parseInt(document.getElementById("num1").value); 
var num2 = parseInt(document.getElementById("num2").value);
var resultado = num1 / num2; 
alert("El resultado de la divisón es: "+ resultado); 
}