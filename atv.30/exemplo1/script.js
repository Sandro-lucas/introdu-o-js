function calcular(operacao) {
  const numeroA = parseFloat(document.getElementById("numeroA").value);
  const numeroB = parseFloat(document.getElementById("numeroB").value);
  let num1 = numeroA + numeroB
  let resultado;

  switch (operacao) {
    case 'soma':
      resultado = numeroA + numeroB;
      break;
    case 'subtracao':
      resultado = numeroA - numeroB;
      break;
    case 'multiplicacao':
      resultado = numeroA * numeroB;
      break;
    case 'divisao':
      resultado = numeroA / numeroB;
      break;
    case 'quadrado':
      resultado = num1 * num1;
      break;
    case 'cubo':
      resultado = num1 * num1 * num1;
      break;
    case 'med':
      resultado = num1 / 2;
      break;
    default:
      resultado = "Operação inválida";
  }

  document.getElementById("result").innerHTML = "Resultado: " + resultado;
}




