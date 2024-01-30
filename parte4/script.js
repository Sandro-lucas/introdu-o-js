const not = prompt("digite sua nota");
let conceito = 0;

// Convert input to a number
const nota = parseFloat(not);

switch (true) {
  case nota >= 0 && nota < 60:
    conceito = "F";
    break;
  case nota >= 60 && nota < 70:
    conceito = "D";
    break;
  case nota >= 70 && nota < 80:
    conceito = "C";
    break;
  case nota >= 80 && nota < 90:
    conceito = "B";
    break;
  case nota >= 90 && nota <= 100:
    conceito = "A";
    break;
  default:
    conceito = "Nota inválida";
}

console.log("Conceito: " + conceito);
