/* Clase Interactuando con HTML */

let tituloPrincipal = document.querySelector('h1');
let parrafo = document.querySelector('p');
tituloPrincipal.innerHTML = "Hora del Desafío";

function fnConsole() {
  console.log('El botón fue clicado');
}

function fnPrompt() {
  let ciudad = prompt('Indique el nombre de una ciudad de Brasil');
  alert(`Estuve en ${ciudad} y me acordé de ti`);
}

function fnAlert() {
  alert("Yo amo JS");
}

function fnSuma() {
  let num1 = parseFloat(prompt("Ingrese el primer número:"));
  let num2 = parseFloat(prompt("Ingrese el segundo número:"));
  parrafo.innerHTML = `La suma entre ${num1} y ${num1} es: ${num1 + num2}`;
}

/* Clase Funciones */

function hola() {
  console.log("¡Hola, mundo!");
}

function holaNombre(nombre) {
  console.log(`¡Hola, ${nombre}!`);
}

function elDobleDe(numero) {
  return numero * 2;
}

function promedio(a,b,c) {
  return (a + b + c) / 3;
}

function elMayor(a,b){
  return a > b ? a : b;
}

function potencia(n) {
  return n * n;
}

hola();
holaNombre('José');

let numero = 4; 
console.log(`El doble de ${numero} es: ${elDobleDe(numero)}`);

console.log(`El promedio entre 4, 5 y 6 es: ${promedio(4,5,6)}`);

console.log("El mayor es:", elMayor(5,3));

console.log("La potencia es:", potencia(5));