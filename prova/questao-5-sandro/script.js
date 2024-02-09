function aplicarDesconto(valorTotal, diaDaSemana) {
    // Verifica o dia da semana para aplicar o desconto correspondente
    if (diaDaSemana === 1) { // 1 representa segunda-feira
        return valorTotal * 1.30; // Aplica desconto de 5%
    } else if (diaDaSemana === 2) { // 3 representa quarta-feira
        return valorTotal * 1.15; // Aplica desconto de 10%
    } else {
        return valorTotal; // Sem desconto
    }
}

// Função para calcular a compra
function calcularCompra() {
    // Obtenção dos valores dos elementos do formulário
    const nomeCliente = document.getElementById('nomeCliente').value;
    const precoCarne = parseFloat(document.getElementById('precoCarne').value);
    const diaSemana = parseInt(document.getElementById('diaSemana').value);

    // Cálculo do valor total da compra
    const valorTotal = precoCarne ;
    // Aplicação do desconto, se aplicável
    const valorComDesconto = aplicarDesconto(valorTotal, diaSemana);

    // Exibição do resultado da compra na página
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `<h2>Resultado da Compra</h2>
                              <p>Cliente: ${nomeCliente}</p>
                              <p>Valor sem imposto: R$ ${valorTotal.toFixed(2)}</p>
                              <p>Valor com imposto: R$ ${valorComDesconto.toFixed(2)}</p>`;}