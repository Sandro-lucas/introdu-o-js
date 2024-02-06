
alert ("No lugar da vírgula, coloque ponto")
function calcular() {
    // Obter valores dos campos de entrada
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const imc = peso / (altura * altura);
    let resultado;

    // Switch para determinar a classificação do IMC
    switch(true) {
        case imc < 18.5 :
            resultado = "Você está abaixo do peso.";
            break;
        case imc >= 18.5 && imc <= 24.9 :
            resultado = "Peso normal";
            break;
        case imc >= 25 && imc <= 29.9 :
            resultado = "Sobrepeso";
            break;
        case imc >= 30 && imc <= 34.9 :
            resultado = "Obesidade Grau I (leve)";
            break;
        case imc >= 35 && imc <= 39.9 :
            resultado = "Obesidade Grau II (moderada)";
            break;
        case imc >= 40:
            resultado = "Obesidade Grau III (grave)";
            break;
        default:
            resultado = "Operação inválida";
    }

    // Exibir o resultado na página
    document.getElementById("resulte").innerHTML = "Resultado: " + resultado + " , seu IMC é " + imc.toFixed(2);
}

// Chamada da função calcular
calcular();
