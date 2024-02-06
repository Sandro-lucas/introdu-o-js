// Função para aplicar desconto de 10% nas quartas-feiras 
function aplicarDesconto(valorTotal) {
    const diaDaSemana = new Date().getDay(); // 0 para domingo, 1 para segunda-feira, etc.
    if (diaDaSemana === 3) {  // 3 representa quarta-feira
        return valorTotal * 0.9;  // Aplica desconto de 10%
    } else {
        return valorTotal; // Sem desconto
    }
}
document.getElementById("resulte").innerHTML =valorTotal