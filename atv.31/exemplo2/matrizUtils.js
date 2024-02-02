// matrizUtils.js
const matrizUtils = (function () {

    function criarMatriz(linhas, colunas) {
      const matriz = [];
      for (let i = 0; i < linhas; i++) {
        matriz.push(new Array(colunas).fill(0));
      }
      return matriz;
    }
  
    function imprimirMatriz(elementId, matriz) {
      const container = document.getElementById(elementId);
      container.innerHTML = `<p>${elementId}:</p>`;
      
      const table = document.createElement('table');
      for (let i = 0; i < matriz.length; i++) {
        const row = table.insertRow();
        for (let j = 0; j < matriz[i].length; j++) {
          const cell = row.insertCell();
          cell.textContent = matriz[i][j];
        }
      }
  
      container.appendChild(table);
    }
  
    function somarMatrizes(matrizA, matrizB) {
      const linhas = matrizA.length;
      const colunas = matrizA[0].length;
      const resultado = criarMatriz(linhas, colunas);
  
      for (let i = 0; i < linhas; i++) {
        for (let j = 0; j < colunas; j++) {
          resultado[i][j] = matrizA[i][j] + matrizB[i][j];
        }
      }
  
      return resultado;
    }
  
    return {
      criarMatriz,
      imprimirMatriz,
      somarMatrizes
    };
  
  })();
  