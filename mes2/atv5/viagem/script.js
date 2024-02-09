function calcularVelocidadeMedia() {
    const rotaSelecionada = document.getElementById("rota").value;
    let distancia; // Distância entre as cidades
    const tempoViagem = 4; // horas

    // Determinar a distância com base na rota selecionada
    switch (rotaSelecionada) {
        case 'SP-RJ':
            distancia = 400;
            break;
        case 'RJ-BH':
            distancia = 500;
            break;
        case 'BH-BSB':
            distancia = 700;
            break;
        case 'BSB-SA':
            distancia = 1000;
            break;
        default:
            alert("Rota selecionada inválida.");
            return;
    }

    // Calcular a velocidade média
    const velocidadeMedia = distancia / tempoViagem;
    const camihao = distancia / 4.5
    const carro = distancia / 10
    // Exibir o resultado
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `Velocidade média necessária para percorrer ${distancia} km em ${tempoViagem} horas: ${velocidadeMedia.toFixed(2)} km/h<br>
    O carro vai consumir ${carro.toFixed(2)} litros de combustivel <br> O caminhão vai consumir ${camihao.toFixed(2)} litros de combustivel`;
}