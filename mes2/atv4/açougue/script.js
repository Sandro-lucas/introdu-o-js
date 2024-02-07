// Função para aplicar desconto de 10% nas quartas-feiras 
// Função para aplicar desconto de acordo com o dia da semana
function aplicarDesconto(valorTotal, diaDaSemana) {
    if (diaDaSemana === 1) { // 1 representa segunda-feira
        return valorTotal * 0.95; // Aplica desconto de 5%
    } else if (diaDaSemana === 3) { // 3 representa quarta-feira
        return valorTotal * 0.9; // Aplica desconto de 10%
    } else {
        return valorTotal; // Sem desconto
    }
}

// Função para calcular o valor total da compra
function calcularCompra() {
    const nomeCliente = document.getElementById('nomeCliente').value;
    const quantidadeCarne = parseFloat(document.getElementById('quantidadeCarne').value);
    const precoCarne = parseFloat(document.getElementById('precoCarne').value);
    const diaSemana = parseInt(document.getElementById('diaSemana').value);

    const valorTotal = quantidadeCarne * precoCarne;
    const valorComDesconto = aplicarDesconto(valorTotal, diaSemana);

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `<h2>Resultado da Compra</h2>
                              <p>Cliente: ${nomeCliente}</p>
                              <p>Valor Total: R$ ${valorTotal.toFixed(2)}</p>
                              <p>Valor com Desconto: R$ ${valorComDesconto.toFixed(2)}</p>`;




}
function testar() {
    const exempl1 = parseInt(document.getElementById('exemplo1').value);
    const boi = 25;
    const frango = 15;
    const linquiça = 20;
   const porco = 30;
    let total = 1;
    if (exempl1 === 1) { total *= 0.95; }
    else if (exempl1 === 3) { total *= 0.90; }
    else { total }
    let joao = (boi * 2) + (frango * 1) + (linquiça * 1);
    let maria = (porco * 3) + (frango * 2) + (linquiça * 1);
    const resultadoDiv1 = document.getElementById('exemplo');
    resultadoDiv1.innerHTML = `<p>Exemplo 1: João comprou 2 kg de carne de boi por 25,00/kg, 1 kg de carne de frango por 15,00/kg e 1 kg de linguiça por  20,00/kg.<br> Exemplo 2: Maria comprou 3 kg de carne de porco por  30,00/kg, 2 kg de carne de frango por 15,00/kg, e 1 kg de linguiça por  20,00/kg.</p><br><p>João tem que pagar ${joao * total} reais<br>Maria tem que pagar ${maria * total} reais`;
}

