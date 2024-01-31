function soma(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}


function multiplicacao(a, b) {
  return a * b;
}

function divisao(a, b) {
  return a / b;
}


function quadrado(numero) {
  return numero * numero;
}

function cubo(numero) {
  return numero * numero * numero;
}

function calcular() {
  const numeroA = parseFloat(document.getElementById("numeroA").value);
  const numeroB = parseFloat(document.getElementById("numeroB").value);

  document.getElementById("soma").innerHTML = "Soma: " + soma(numeroA, numeroB);
  document.getElementById("subtracao").innerHTML = "Subtração: " + subtracao(numeroA, numeroB);
  document.getElementById("multiplicacao").innerHTML = "Multiplicação: " + multiplicacao(numeroA, numeroB);
  document.getElementById("divisao").innerHTML = "Divisão: " + divisao(numeroA, numeroB);
  document.getElementById("quadrado").innerHTML = "Quadrado do número A: " + quadrado(numeroA);
  document.getElementById("cubo").innerHTML = "Cubo do número B: " + cubo(numeroB);
}