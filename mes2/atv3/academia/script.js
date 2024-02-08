alert ("No lugar da vírgula, coloque ponto"); // Alerta para informar ao usuário sobre o uso do ponto decimal

function calcular() {
    // Obter valores dos campos de entrada
    const peso = parseFloat(document.getElementById("peso").value); // Obtém o peso digitado e converte para float
    const altura = parseFloat(document.getElementById("altura").value); // Obtém a altura digitada e converte para float
    const imc = peso / (altura * altura); // Calcula o IMC (peso / altura ao quadrado)
    let resultado; // Variável para armazenar a classificação do IMC

    // Switch para determinar a classificação do IMC com base nos valores
    switch(true) {
        case imc < 18.5 :
            resultado = "Você está abaixo do peso."; // Mensagem para IMC abaixo de 18.5
            break;
        case imc >= 18.5 && imc <= 24.9 :
            resultado = "Peso normal"; // Mensagem para IMC entre 18.5 e 24.9
            break;
        case imc >= 25 && imc <= 29.9 :
            resultado = "Sobrepeso"; // Mensagem para IMC entre 25 e 29.9
            break;
        case imc >= 30 && imc <= 34.9 :
            resultado = "Obesidade Grau I (leve)"; // Mensagem para IMC entre 30 e 34.9
            break;
        case imc >= 35 && imc <= 39.9 :
            resultado = "Obesidade Grau II (moderada)"; // Mensagem para IMC entre 35 e 39.9
            break;
        case imc >= 40:
            resultado = "Obesidade Grau III (grave)"; // Mensagem para IMC acima de 40
            break;
        default:
            resultado = "Operação inválida"; // Mensagem padrão caso não se enquadre em nenhum caso
    }

    // Exibir o resultado na página
    document.getElementById("resulte").innerHTML = "Resultado: " + resultado + " , seu IMC é " + imc.toFixed(2); // Exibe o resultado formatado com duas casas decimais
}

// Chamada da função calcular
calcular(); // Esta linha executa a função `calcular()` quando a página é carregada.
