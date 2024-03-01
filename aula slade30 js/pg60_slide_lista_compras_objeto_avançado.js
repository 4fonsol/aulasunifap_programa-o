//EXERCICIO PG60
//- Faça um objeto chamado ListaDeCompras, e dentro desse objeto crie uma 
//  propriedade chamada produtos, e dentro dela coloque os produtos, e seus 
//  respectivos valores, e utilizando uma dos recursos mostrados anteriormente, 
//  faça a soma total desses valores.


let lista_de_compras = {

    produto:{ 
        açucar: 5.6 , 
        
        leite: 2.5,

        cafe: 5.5
    
    } 
}


for(let i in lista_de_compras.produto){

    soma += lista_de_compras.produto[i]

    console.log(soma)

}




 
