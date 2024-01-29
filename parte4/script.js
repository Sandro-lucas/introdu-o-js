const num = prompt("Digite sua idade")
if(num<0 ){console.log("Você é  um feto ou infome uma idade valida");}
else if(num >=0 && num<18  ){console.log("Menor de idade");}
else if (num >= 18 && num < 65){ console.log("Adulto");}
else {console.log("Idoso");}


const num1 = prompt("Digite um numero");
const num2 = prompt("Digite outro numero");

if (num1 > num2) {
  console.log(num1 + " é maior que " + num2);
} else if (num2 > num1) {
  console.log(num2 + " é maior que " + num1);
} else {
  console.log(num2 + " é igual a " + num1);
}



let num3 = prompt("Digite um numero de 1 a 7 representando o dia dessa semana ");
if (num3 == 1) {
  console.log("Segunda-Feira");
} else if(num3 == 2) {
    console.log("Terça-Feira");
} else if(num3 == 3) {
    console.log("Quarta-Feira");
} else if(num3 == 4) {
    console.log("Quinta-Feira");
} else if(num3 == 5) {
    console.log("Sexta-Feira");
} else if(num3 == 6) {
    console.log("Sabado");
} else if(num3 == 7) {
    console.log("Domingo");
} else{console.log("numero invalido");
}

let num5 = prompt("digite sua nota da prova de 0 à 100")
if (num5 < 60){console.log("Reprvado");}
else if (num5 >= 60 && num5 <= 74){console.log("Regular");}
else if (num5 >= 75 && num5 <= 89){console.log("bom");}
else if (num5 >= 90 && num5 <= 100);{console.log("Exelente");}

let num4 = prompt("Digite quantos lados são iquais o triangulo tem de 0, 2 ou 3 ");
if (num4 == 0) {
    console.log("Escaleno");
  } else if(num3 == 2) {console.log("Isósceles");}
  else if (num3 == 3);{console.log("Equilatero");}

  let num6 = prompt("digite um Ano")
  
  if (( num6 % 4 == 0 && numb6 % 100 != 0) ||(num6 % 400 == 0)) {console.log("esse ano é Bissexto");}
  else{console.log("esse ano não é Bissexto");}