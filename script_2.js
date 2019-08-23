
var number= prompt("De quel nombre veux-tu calculer la factorielle?");
var result =  number

while(number>1) {
  number-- ;
  result = result * number ;
}

console.log(`Le résultat est : ${result}`)