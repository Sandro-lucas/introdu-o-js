const not = prompt("digite sua nota");
let conceito = 0
switch (true){
  case not >= 0 &&  not < 60 :
    conceito ="F"
  break;
  case not >= 60 &&  not < 70 :
    conceito ="D"
  break;
  case not >= 70 && not < 80 :
    
     conceito ="C"
  break;
  case not  >= 80 && not < 90 :
    conceito ="B"
  break;
  case not >=  90 && not < 101 :
   conceito ="A"
break;
default:
   conceito= "nota invalida"
   
}
console.log(" conceito: "+ conceito)