//EXERCÍCIOS
//- Faça um programa que tenha um ARRAY, contendo 3 elementos dentro, e 
//utilizando o método SLICE, pegue a primeira letra de cada elemento.


lista = ['café', 'goiaba', 'coca cola']

console.log(lista[0].slice())//pegou string 'cafe'

console.log(lista[1].slice()[0])//pegou string 'goiaba' e colocou primeira letra


//aqui peguei terceira string 'coca cola' ela esta segunda posição [2]
console.log(lista [2]. slice(0)[0,7] )//aqui peguei 'coca cola' esta [2] posição usei .slice pegar setima letra q é 'L'