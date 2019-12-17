/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myvar = ['Matheus', 13, true, 'Black', 99];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myfunction(arr, index) {
    return arr[index];
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
myfunction()[1]
false

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function valores() {
    var param2 = 13;
    var param1 = [1, param2, 'String', undefined, null];

    return param1[1];

}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myvar = [1, 'Array', true, null, undefined];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
myfunction( myvar , 0);
myfunction( myvar , 1);
myfunction( myvar , 2);
myfunction( myvar , 3);
myfunction( myvar , 4);

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(livro) {

    var livros = 
    
    {
        'Curso Ninja': {
            quantidadePaginas: 250,
            autor: 'Daciuk',
            editora: 'Udemy'
        },
        'Curso Angular':{
            quantidadePaginas: 220,
            autor: 'Fernando',
            editora: 'Alura'
        },
        'Curso NestJs': {
            quantidadePaginas: 337,
            autor: 'Ninja',
            editora: 'DevMedia'
        }
    }; 
    if(!livro){
        return livros;
    }

    return livros[ livro ];

    // Retorno com operador ternário 
    // return !livro ? livros : livros[ livro ];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
function book(livro) {

    var livros = 
    
    {
        'Curso Ninja': {
            quantidadePaginas: 250,
            autor: 'Daciuk',
            editora: 'Udemy'
        },
        'Curso Angular':{
            quantidadePaginas: 220,
            autor: 'Fernando',
            editora: 'Alura'
        },
        'Curso NestJs': {
            quantidadePaginas: 337,
            autor: 'Ninja',
            editora: 'DevMedia'
        }
    }; 

    // Retorno com operador ternário 
    return !livro ? livros : livros[ livro ];
}

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
var bookName = 'Curso Angular' ;
console.log('O livro ' + bookName + ' tem ' + book( bookName ).quantidadePaginas + ' páginas!'); 

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
var bookName = 'Curso Angular' ;
console.log( 'O livro ' + bookName + ' foi publicado pela editora ' + book( bookName ).editora + ' !' );