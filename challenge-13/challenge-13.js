/*
Envolva todo o código desse desafio em uma IIFE.
*/

(function() {
    /*
    Crie um array e mostre no console a representação em String desse array,
    usando o método visto na aula 13.
    */
    console.log('O array em formato de string é:');
    console.log([1, 2, 3, 4, 5].toString());

    /*
    Crie 2 arrays `sul` e `sudeste`, que serão as regiões do Brasil.
    Cada array deve conter os estados dessa região.
    */
    sul = ['PR', 'SC', 'RS']
    sudeste = ['MG', 'SP', 'RJ', 'ES']

    /*
    Crie uma variável chamada `brasil`, que irá receber as duas regiões
    concatenadas. Mostre o `brasil` no console.
    */
    console.log('\nAlguns Estados do Brasil:');

    let brasil = sul.concat(sudeste); // FAZ A CONCATENAÇÃO DE DOIS ARRAYS
    console.log(brasil)
        /*
        Adicione 3 novos estados da região Norte no início do array e mostre no console.
        */
    console.log('\nMais estados adicionados:');
    brasil.unshift('PA', 'AC', 'AM') // INSERE ITEM NO INICIO DO ARRAY
    console.log(brasil);
    /*
    Remova o primeiro estado do array `brasil` e mostre-o no console.
    */
    console.log('\nEstado removido:');
    console.log(brasil.shift()) // REMOVE O PRIMEIRO ITEM DO ARRAY E RETORNA O ITEM REMOVIDO
        /*
        Crie um novo array chamado `newSul`, que receba somente os estados do sul,
        pegando do array `brasil`. Não remova esses itens de `brasil`.
        */
    var newSul = brasil.slice(2, 5) // PEGA UMA FAXA DE VALORES DO ARRAY

    /*
    Mostre no console os estados que estão em `newSul`.
    */
    console.log('\nEstados do Sul do Brasil:');
    console.log(newSul)

    /*
    Mostre no console todos os estados que estão em `brasil`.
    */
    console.log('\nAlguns Estados do Brasil:');
    console.log(brasil)

    /*
    Crie um novo array chamado `nordeste`, que tenha os estados do nordeste.
    */
    var nordeste = ['AL', 'BA', 'CE', 'MA', 'PA', 'PE', 'PI', 'RN', 'SE']

    /*
    Mostre no console os estados do nordeste.
    */
    console.log('\nEstados do Nordeste:');
    console.log(nordeste)

    /*
    Remova de `brasil` os estados do `sudeste`, colocando-os em uma variável
    chamada `newSudeste`.
    */
    var newSudeste = brasil.splice(5, 4);
    /*
     REMOVE OS ITENS E ALOCA ELES EM UM NOVO ARRAY 
     O PRIMEIRO INDICE É A PARTIR DE QUAL ELEMENTO DO ARRAY VAI COMEÇAR A EXCLUIR
     O SEGUNDO INDICE É ATÉ QUAL ELEMENTE SERÁ EXCLUÍDO 
     CASO FIQUE 0, NÃO SERA EXCLUÍDO NENHUM DEPOIS DO PRIMEIRO INDICE
     CASO O SEGUNDO ELEMENTO FIQUE VAZIO, SERÁ EXCLUÍDO ATÉ O FINAL DO ARRAY
     CASO TENHA ALGUM VALOR, SERÁ EXCLUÍDO ATÉ O VALOR PASSADO 
    */
    /*
    Adicione os estados do `nordeste` ao array `brasil`. Esses estados devem
    ficar no mesmo nível que os estados já existentes, não em um array separado.
    */
    brasil = brasil.concat(nordeste);

    /*
    Mostre no console os estados em `newSudeste`.
    */
    console.log('\nEstados em newSudeste:');
    console.log(newSudeste);

    /*
    Mostre no console os estados do `brasil`.
    */
    console.log('\nAlguns estados do Brasil:');
    console.log(brasil);

    /*
    usando forEach, percorra o array `brasil` e gere um novo array chamado
    `newBrasil`. Esse array deve ter cada item como um objeto, com as
    propriedades:
    - `id`: que será o índice do array `brasil`,
    - `estado`: que será o estado do array `brasil`.
    */
    var newBrasil = [];

    brasil.forEach(function(item, index) {
        newBrasil.push({
            id: index,
            estado: item
        })
    });

    // O FOREACH percorre item por item retornando a condição indicada para cada um.
    /*
    Mostre o array `newBrasil` no console
    */
    console.log('\nnewBrasil:');
    console.log(newBrasil)

    /*
    Percorra o array `brasil` e verifique se os estados tem mais de 7 letras cada,
    atribuindo o resultado à uma variável. Se tiver, mostre no console a frase:
    - "Sim, todos os estados tem mais de 7 letras!"
    Senão, mostre no console:
    - "Nem todos os estados tem mais de 7 letras!"
    */
    console.log('\nTodos os estados de `brasil` tem mais de 7 letras?');

    var every = brasil.every(function(item) {
            return item.length > 7;
        })
        // EVERY PERCORRE O ARRAY E RETORNA UM BOOLEAN
    console.log(every ? 'Sim, todos os estados tem mais de 7 letras!' : 'Nem todos os estados tem mais de 7 letras!')
        /*
        Percorra o array `brasil` e verifique se o Ceará está incluído, atribuindo o
        resultado à uma variável. Se esse estado existir no array, mostrar a frase no
        console:
        - "Ceará está incluído!"
        Senão, mostrar a frase:
        - "Ceará não foi incluído :("
        */
    console.log('\nCeará está incluído em `brasil`?');
    var estadoEscolhido = brasi.some(function(item) {
        return item === 'CE'
    });

    console.log(estadoEscolhido ? 'Ceará está incluído!' : 'Ceará não está incluído');

    //O SOME PERCORRE O ARRAY E SE UM DOS ITENS DO ARRAY ATENDAR A CONDIÇÃO ELE RETORNA TRUE

    /*
    Percorra o array `newBrasil` e crie um novo array que some 1 no ID de cada
    objeto desse array, e adicione a frase abaixo na propriedade `estado`:
    - "[ESTADO] pertence ao Brasil."
    Atribua o novo array a uma variável chamada `map`.
    */
    var map = newBrasil.map(function(value, index) {
        return {
            id: value.id++,
            estado: value.estado += ' percente ao Brasil'
        }
    });
    // O MAP ACESSA O ARRAY E RETORNA A EXPRESSÃO PASSADA, NESTE CASO RETORNANDO OS ID'S E OS ESTADOS COM UMA FRASE CONCATENADA
    /*
    Mostre no console o array criado acima:
    */
    console.log('\nnewBrasil agora com mais informações:');
    console.log(map);

    /*
    Filtre o array criado acima, retornando somente os estados que tiverem
    ID par. Atribua o valor à uma variável chamada `filter`.
    */
    var filter = map.filter(function(item) {
            return item.id % 2 === 0;
        })
        // O FILTER RETORNA SOMENTE A EXPRESSÃO E RETORNA O PRÓPRIO ITEM, CASO A EXPRESSÃO SEJA VERDADEIRA, NESTE CASO RETORNANDO TODOS OS ID'S PARES
        /*
        Mostre o array filtrado acima no console.
        */
    console.log('\nEstados com ID par:');
    console.log(filter)
})