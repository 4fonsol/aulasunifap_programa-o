//EXERCICIO PG59 SLIDE

//- Crie um objeto, e utilizando um dos recursos mostrado anteriormente, ache
//a propriedade que contenha 0 como valor.
//Objeto exemplo:
//   const livros = {
//   'O Iluminado': 50,
//   'Os sete maridos de Evelyn Hugo': 60,
//   'O Hobbit': 0,

const livros = {
  "O Iluminado": 50,
  "Os sete maridos de Evelyn Hugo": 60,
  "Hobbit": 0,
};


for (let livro in livro) {
  
  if(livros[livro] === 0) console.log(livro[0]);
}
