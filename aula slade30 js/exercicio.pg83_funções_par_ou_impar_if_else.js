//EXERCICIO pg83 slide unifap javascript
//1. Implemente uma função que recebe um número e verifica se ele é par ou ímpar usando uma 
//   estrutura de controle if/else.

function par_impar(numero){

    if(numero % 2 === 0){
        console.log(`${numero} é par`)}

        else{
            console.log(`${numero} é impar `)
        }
}

par_impar(5)
par_impar(12)