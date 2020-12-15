//|JASON|
// Serielização:
// Processo de captura de dados de uma estrutura de dados (objeto) para que ela possa ser armazenada, transmitida e porteiormente reconstituída. Cria um texto Json que é válido! Método JSON.stringfy

// |JASON|
//Desserialização:
//Processo inverso ao da serialização, permite converter JSON válidos em valores e objetos que possam ser usados em um programa - ou seja, reconstitui a estrutura de dados. Também chamado de : parsing. JSON.parse

// |JSON|
// Tokens do JSON
// O JSON possui alguns caracteres estruturais usados como tokens:
/*
 Literal: { | Token = Inicial Objeto   
 Literal: } | Token = Finaliza Objeto
 Literal: [ | Token = Inicial Array
 Literal: ] | Token = Finaliza Array
 Literal: : | Token = Separador de nome/valor
 Literal: , | Token = Separador de pares 
 */
//Exemplo de uma estrutura JSON

/* usei var porque no mozila não aceitava let e const */
var frutas =`{ 
    "fruta": "banana",
    "preço": 17.80,
    "tipo": [
        "prata",
        "maça",
        "nanica",
        "da terra", "ouro"
    ],
    "origem": "Brasil"
}`

console.log(frutas) // vai aparecer todas as informações da minha váriável
console.log(JSON.parse(frutas)) // vai identificar os objetos dentro dessa váriável e todos os seus valores
/* O que ele retorna

{…}
​
fruta: "banana"
​
origem: "Brasil"
​
"preço": 17.8
​
tipo: (5) […]
​​
0: "prata"
​​
1: "maça"
​​
2: "nanica"
​​
3: "da terra"
​​
4: "ouro"
​​
length: 5
​​
<prototype>: Array []
​
<prototype>: Object { … }

*/

console.log(JSON.parse(frutas).nome)// vai imprimir somente o valor do nome que eu escolher ex:.nome: vai retornar banana
