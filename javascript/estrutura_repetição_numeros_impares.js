//Escreva um programa que imprima os numeros pares de 1 a 20
 // == aqui igualdade 
let pares = 1 % 2 == 0

 for ( let i =  0 ; i <= 20; i++   ) {
    if ( i % 2 == 0) console.log(pares + i)//usando if (i % 2 == 0) i diferente ou igual 2
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//Escreva um programa que imprima os numeros impare de 1 a 20

let impar = 1 % 2 != 0 //condição para numeros impares
 
// aqui acontece repetição onde ++ faz parar 20
for ( let i = 0 ; i <= 20; i ++) {
    // != diferença entre eles
if ( i % 2 == 0 ) console.log(impar + i)
}