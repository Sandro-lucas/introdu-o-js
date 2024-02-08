function aplicarDesconto(valorTotal, diaDaSemana) {
    // Verifica o dia da semana para aplicar o desconto correspondente
    if (diaDaSemana === 1) { // 1 representa segunda-feira
        return valorTotal * 0.95; // Aplica desconto de 5%
    } else if (diaDaSemana === 3) { // 3 representa quarta-feira
        return valorTotal * 0.9; // Aplica desconto de 10%
    } else {
        return valorTotal; // Sem desconto
    }
}

// Função para calcular a compra
function calcularCompra() {
    // Obtenção dos valores dos elementos do formulário
    const nomeCliente = document.getElementById('nomeCliente').value;
    const quantidadeCarne = parseFloat(document.getElementById('quantidadeCarne').value);
    const precoCarne = parseFloat(document.getElementById('precoCarne').value);
    const diaSemana = parseInt(document.getElementById('diaSemana').value);

    // Cálculo do valor total da compra
    const valorTotal = quantidadeCarne * precoCarne;
    // Aplicação do desconto, se aplicável
    const valorComDesconto = aplicarDesconto(valorTotal, diaSemana);

    // Exibição do resultado da compra na página
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `<h2>Resultado da Compra</h2>
                              <p>Cliente: ${nomeCliente}</p>
                              <p>Valor Total: R$ ${valorTotal.toFixed(2)}</p>
                              <p>Valor com Desconto: R$ ${valorComDesconto.toFixed(2)}</p>`;
}

// Função para testar exemplos
function testar() {
    // Obtenção do valor digitado para o exemplo
    const exempl1 = parseInt(document.getElementById('exemplo1').value);
    // Definição dos preços das carnes
    const boi = 25;
    const frango = 15;
    const linquiça = 20;
    const porco = 30;
    // Inicialização do fator de desconto
    let total = 1;
    // Aplicação do desconto, se aplicável, com base no dia da semana
    if (exempl1 === 1) { total *= 0.95; } // Desconto de 5% para segunda-feira
    else if (exempl1 === 3) { total *= 0.90; } // Desconto de 10% para quarta-feira
    else { total } // Sem desconto
    // Cálculo dos valores de compra para João e Maria
    let joao = (boi * 2) + (frango * 1) + (linquiça * 1);
    let maria = (porco * 3) + (frango * 2) + (linquiça * 1);
    // Exibição dos resultados na página
    const resultadoDiv1 = document.getElementById('exemplo');
    resultadoDiv1.innerHTML = `<p>Exemplo 1: João comprou 2 kg de carne de boi por 25,00/kg, 1 kg de carne de frango por 15,00/kg e 1 kg de linguiça por  20,00/kg.<br> Exemplo 2: Maria comprou 3 kg de carne de porco por  30,00/kg, 2 kg de carne de frango por 15,00/kg, e 1 kg de linguiça por  20,00/kg.</p><br><p>João tem que pagar ${joao * total} reais<br>Maria tem que pagar ${maria * total} reais`;
}
