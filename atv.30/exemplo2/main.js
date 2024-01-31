// main.js
// Exemplo de uso das funções
const matrizA = matrizUtils.criarMatriz(3, 3);
const matrizB = matrizUtils.criarMatriz(3, 3);

// Preencher as matrizes com valores de exemplo
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    matrizA[i][j] = i + j;
    matrizB[i][j] = i - j;
  }
}

matrizUtils.imprimirMatriz('matrizA', matrizA);
matrizUtils.imprimirMatriz('matrizB', matrizB);

const matrizSoma = matrizUtils.somarMatrizes(matrizA, matrizB);
matrizUtils.imprimirMatriz('matrizSoma', matrizSoma);
