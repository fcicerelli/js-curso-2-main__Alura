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

/* Índice de Masa Corporal */

let resultado = document.querySelector('.resultadoIMC');
let peso = document.getElementById('pesoIMC');
let altura = document.getElementById('alturaIMC');
function calcularIMC() {
  let imc = parseFloat(peso.value) / ( parseFloat(altura.value) * parseFloat(altura.value) );
  resultado.innerHTML = `El IMC es de ${imc}`;
  console.log(peso.value, altura.value);
}

/* factorial */

let numeroACalcularFactorial = document.querySelector('#numeroACalcularFactorial');
let factorial = document.querySelector('.factorial__resultado');

function calcularFactorial(){
  let aux = 1;
  if(numeroACalcularFactorial.value > 1){
    for(let i = numeroACalcularFactorial.value; i >= 1; i--) {
      aux = aux * i;
    }
  }
  factorial.innerHTML = aux;
}

/* Divisas */

let divisaAConvertir = document.querySelector('#divisas__input');
let divisas__resultado = document.querySelector('.divisas__resultado');

function calcularDivisa(){
  let tasaConversion = 4.8;
  
  divisas__resultado.innerHTML = divisaAConvertir.value * tasaConversion;
}

/* Area y perímetro de un Rectángulo*/

let area__base = document.querySelector('#area__base');
let area__altura = document.querySelector('#area__altura');
let area__resultado_area = document.querySelector('.area__resultado_area');
let area__resultado_perimetro = document.querySelector('.area__resultado_perimetro');

function calcularAreaYPerimetro(){
  area__resultado_area.innerHTML = `El área es: ${area__base.value * area__altura.value}`;
  area__resultado_perimetro.innerHTML = `El perímetro es: ${ 2 * area__base.value + 2 * area__altura.value}`;
}

/* Area y perímetro de un Círculo*/

let area__radio = document.querySelector('#area__radio');
/* let area__altura = document.querySelector('#area__altura'); */
let area__resultado_area_circulo = document.querySelector('.area__resultado_area_circulo');
let area__resultado_perimetro_circulo = document.querySelector('.area__resultado_perimetro_circulo');

function calcularAreaYPerimetro_circulo(){
  area__resultado_area_circulo.innerHTML = `El área es: ${Math.round(3.14 * area__radio.value * area__radio.value*100)/100}`;
  area__resultado_perimetro_circulo.innerHTML = `El perímetro es: ${Math.round(2 * 3.14 * area__radio.value*100)/100}`;
}

// redondeo 2 decimales: 
// Math.round(a*100)/100

/* Tabla de multiplicar */

let tabla__input = document.querySelector('#tabla__input');
let tabla__resultado = document.querySelector('.tabla__resultado');

function generarTablaDeMultiplicar() {
  let tabla = '';
  for (let i = 1; i <=10; i++) {
    tabla = tabla + `${tabla__input.value} x ${i} = ${tabla__input.value * i} <br>`;
  }
  tabla__resultado.innerHTML = tabla;
}