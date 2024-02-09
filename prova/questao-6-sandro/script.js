alert ("No lugar da vírgula, coloque ponto"); // Alerta para informar ao usuário sobre o uso do ponto decimal

function calcular() {
    // Obter valores dos campos de entrada
    const peso = parseFloat(document.getElementById("peso").value); // Obtém o peso digitado e converte para float
    // Obtém a altura digitada e converte para float
    const imc = peso  // Calcula o IMC (peso / altura ao quadrado)
    let resultado; // Variável para armazenar a classificação do IMC
    const nomeCliente = document.getElementById('nomeCliente').value
    // Switch para determinar a classificação do IMC com base nos valores
    switch(true) {
        case imc < 2500 && imc >= 0:
            resultado = imc; // Mensagem para IMC abaixo de 18.5
            break;
        case imc >= 2500 && imc < 3000 :
            resultado = imc * 0.95; // Mensagem para IMC entre 18.5 e 24.9
            break;
        case imc >= 3000 :
            resultado = imc * 0.9; // Mensagem para IMC entre 25 e 29.9
            break;
        default:
            resultado = "Operação inválida";// Mensagem padrão caso não se enquadre em nenhum caso
    }

    // Exibir o resultado na página
    document.getElementById("resulte").innerHTML = `<P>Nome:${nomeCliente}
    <br>O valor Total de sua de sua Compra com desconto é R$${resultado.toFixed(2)}</p>`; // Exibe o resultado formatado com duas casas decimais
    console.log(`.Lucas tem o valor total da compra = R$2500.00, com desconto fica R$2375.00`)
    console.log(`.Leida tem o valor total da compra = R$5250.00, com desconto fica R$4725.00`)
    console.log(`.Daniel tem o valor total da compra = R$4725.00, com desconto fica R$4252.50`)
    console.log(`Nome: ${nomeCliente}`)
    console.log(`O valor Total de sua de sua Compra com desconto é R$${resultado.toFixed(2)}`)
}
// Chamada da função calcular
calcular(); // Esta linha executa a função `calcular()` quando a página é carregada.
