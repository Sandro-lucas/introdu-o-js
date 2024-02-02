function calcular(operacao) {
  // Obter valores dos campos de entrada
  const numeroA = parseFloat(document.getElementById("numeroA").value);
  const numeroB = parseFloat(document.getElementById("numeroB").value);
  const num1 = numeroA + numeroB;
  let resultado;

  // Switch para determinar a operação
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
      case 'comp':
          if (numeroA < numeroB) {
              resultado = `${numeroA} < ${numeroB} é a multiplicação da metade do valor do maior pelo valor do menor é = ${(numeroA / 2) * numeroB}`;
          } else if (numeroA > numeroB) {
              resultado = `${numeroA} > ${numeroB} é a multiplicação da metade do valor do maior pelo valor do menor é = ${(numeroB / 2) * numeroA}`;
          } else {
              resultado = `${numeroA} = ${numeroB} é o resultado da soma dividida por 2 é = ${(num1 / 2)}`;
          }
          break;
      default:
          resultado = "Operação inválida";
  }

  // Exibir o resultado na página
  document.getElementById("resulte").innerHTML = "Resultado: " + resultado;
}




