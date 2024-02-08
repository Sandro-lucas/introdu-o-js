// Função para realizar operações matemáticas
function calcular(operacao) {
    // Obter valores dos campos de entrada
    const numeroA = parseFloat(document.getElementById("numeroA").value);
    const numeroB = parseFloat(document.getElementById("numeroB").value);
    const num1 = numeroA + numeroB; // Variável auxiliar para cálculos

    let resultado; // Variável para armazenar o resultado das operações

    // Switch para determinar a operação com base no argumento 'operacao'
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
            resultado = num1 * num1; // Calcula o quadrado da soma dos números
            break;
        case 'cubo':
            resultado = num1 * num1 * num1; // Calcula o cubo da soma dos números
            break;
        case 'med':
            resultado = num1 / 2; // Calcula a média da soma dos números
            break;
        case 'comp':
            // Compara os números e realiza operações com base na comparação
            if (numeroA < numeroB) {
                resultado = `${numeroA} < ${numeroB} é a multiplicação da metade do valor do maior pelo valor do menor é = ${(numeroA / 2) * numeroB}`;
            } else if (numeroA > numeroB) {
                resultado = `${numeroA} > ${numeroB} é a multiplicação da metade do valor do maior pelo valor do menor é = ${(numeroB / 2) * numeroA}`;
            } else {
                resultado = `${numeroA} = ${numeroB} é o resultado da soma dividida por 2 é = ${(num1 / 2)}`;
            }
            break;
        default:
            resultado = "Operação inválida"; // Mensagem para operação inválida
    }
  
    // Exibir o resultado na página
    document.getElementById("resulte").innerHTML = "Resultado: " + resultado;
}

  
  
  