let num1 = parseInt(prompt("Digite o número da primeira tabuada"));
let num2 = parseInt(prompt("Digite o número da última tabuada"));


 

if (isNaN(num1) || isNaN(num2)) {
    console.log("Por favor, digite números válidos.");
} 
else {

    for (let p1 = num1; p1 <= num2; p1++) {
        for (let p2 = 1; p2 <= 10; p2++) {
            console.log( p1 + " x " + p2 + " = " + p1 * p2);
        }
        console.log("--------------------");
    }
}
