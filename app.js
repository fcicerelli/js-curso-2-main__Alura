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