const num1 = prompt("Digite um numero");
const num2 = prompt("Digite outro numero");

if (num1 > num2) {
    console.log(num1 + " é maior que " + num2);
} else if (num2 > num1) {
    console.log(num2 + " é maior que " + num1);
} else {
    console.log(num2 + " é igual a " + num1);
}