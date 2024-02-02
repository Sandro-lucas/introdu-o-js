

let soma = 0;
let num = prompt("Digite um número inteiro: ");

while (num > 0) {
  if (num % 2 === 0) {
    soma += parseInt(num);
    console.log('+ ' + soma);
  } else {
    console.log('Número ímpar, não será somado.');
  }
  
  num = prompt("Digite outro número inteiro (ou digite um número menor ou igual a 0 para encerrar): ");
}

console.log("A soma dos números pares é: " + soma);

