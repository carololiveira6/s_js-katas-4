const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";

const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];

const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit";

// Início do exemplo

// let header = document.createElement("div");
//     header.textContent = "Kata 0 - Exemplo";
//     document.body.appendChild(header);
 
//    function kata0() {

//        let newElement = document.createElement("div");
//        newElement.textContent = JSON.stringify(lotrCitiesArray); // DICA
//        document.body.appendChild(newElement)
 
//        return lotrCitiesArray; // Não esqueça de retornar a saída
//    }
// kata0()

// Fim do exemplo

function criarElemento(array) {

    let newElement = document.createElement("div");
        newElement.textContent = JSON.stringify(array);
        document.body.appendChild(newElement);

    return newElement
}

/* 1- Escreva uma função que retorna um array com as cidades em 'gotCitiesCSV'. Lembre-se de também adicionar os resultados à página. */

let titulo1 = document.createElement("h2");
    titulo1.textContent = "Kata 1";
    document.body.appendChild(titulo1);

let paragrafo1 = document.createElement("p");
    paragrafo1.textContent = "Escreva uma função que retorna um array com as cidades em 'gotCitiesCSV'. Lembre-se de também adicionar os resultados à página. Resposta:" ;
    document.body.appendChild(paragrafo1);

function kata1() {

    let newArray = gotCitiesCSV.split(/\s*,\s*/);

    return newArray;
}

criarElemento(kata1());

/* 2- Escreva uma função que retorna um array das palavras na frase contida em 'bestThing'. Lembre-se de também adicionar os resultados à página. */

let titulo2 = document.createElement("h2");
    titulo2.textContent = "Kata 2";
    document.body.appendChild(titulo2);

let paragrafo2 = document.createElement("p");
    paragrafo2.textContent = "Escreva uma função que retorna um array das palavras na frase contida em 'bestThing'. Lembre-se de também adicionar os resultados à página. Resposta:" ;
    document.body.appendChild(paragrafo2);

function kata2() {

    let newArray = bestThing.split(' ');

    return newArray;
}

criarElemento(kata2());

/* 3- Escreva uma função que retorna uma string separada por ponto-e-vírgulas em vez das vírgulas de 'gotCitiesCSV'. Lembre-se de também adicionar os resultados à página. */

let titulo3 = document.createElement("h2");
    titulo3.textContent = "Kata 3";
    document.body.appendChild(titulo3);

let paragrafo3 = document.createElement("p");
    paragrafo3.textContent = "Escreva uma função que retorna uma string separada por ponto-e-vírgulas em vez das vírgulas de 'gotCitiesCSV'. Lembre-se de também adicionar os resultados à página. Resposta:" ;
    document.body.appendChild(paragrafo3);

function kata3() {

    let newStr = gotCitiesCSV.split(/\s*,\s*/).join(";");

    return newStr;
}

criarElemento(kata3());

/* 4- Escreva uma função que retorne uma string CSV (separada por vírgulas) de 'lotrCitiesArray'. Lembre-se de também adicionar os resultados à página. */

let titulo4 = document.createElement("h2");
    titulo4.textContent = "Kata 4";
    document.body.appendChild(titulo4);

let paragrafo4 = document.createElement("p");
    paragrafo4.textContent = "Escreva uma função que retorne uma string CSV (separada por vírgulas) de 'lotrCitiesArray'. Lembre-se de também adicionar os resultados à página. Resposta:" ;
    document.body.appendChild(paragrafo4);

function kata4() {

    let newStr = lotrCitiesArray.join(',');

    return newStr;
}

criarElemento(kata4());

/* 5- Escreva uma função que retorna um array com as 5 primeiras cidades de 'lotrCitiesArray'. Lembre-se de também adicionar os resultados à página. */

let titulo5 = document.createElement("h2");
    titulo5.textContent = "Kata 5";
    document.body.appendChild(titulo5);

let paragrafo5 = document.createElement("p");
    paragrafo5.textContent = "Escreva uma função que retorna um array com as 5 primeiras cidades de 'lotrCitiesArray'. Lembre-se de também adicionar os resultados à página. Resposta:" ;
    document.body.appendChild(paragrafo5);

function kata5() {

    let newArray = lotrCitiesArray.slice(0,5);
 
    return newArray;
}

criarElemento(kata5());

/* 6- Escreva uma função que retorna um array com as 5 últimas cidades de 'lotrCitiesArray'. Lembre-se de também adicionar os resultados à página. */

let titulo6 = document.createElement("h2");
    titulo6.textContent = "Kata 6";
    document.body.appendChild(titulo6);

let paragrafo6 = document.createElement("p");
    paragrafo6.textContent = "Escreva uma função que retorna um array com as 5 últimas cidades de 'lotrCitiesArray'. Lembre-se de também adicionar os resultados à página. Resposta:" ;
    document.body.appendChild(paragrafo6);

function kata6() {

    let newArray = lotrCitiesArray.slice(-5);
 
    return newArray;
}

criarElemento(kata6());

/* 7- Escreva uma função que retorna um array contendo da 3ª a 5ª cidades de 'lotrCitiesArray'. Lembre-se de também adicionar os resultados à página. */

let titulo7 = document.createElement("h2");
    titulo7.textContent = "Kata 7";
    document.body.appendChild(titulo7);

let paragrafo7 = document.createElement("p");
    paragrafo7.textContent = "Escreva uma função que retorna um array contendo da 3ª a 5ª cidades de 'lotrCitiesArray'. Lembre-se de também adicionar os resultados à página. Resposta:" ;
    document.body.appendChild(paragrafo7);

function kata7() {
    
    let newArray = lotrCitiesArray.slice(2,5);
 
    return newArray;
}

criarElemento(kata7());

/* 8- Escreva uma função que use 'splice' para remover 'Rohan' de 'lotrCitiesArray' e retorne o novo 'lotrCitiesArray' modificado. Lembre-se de também adicionar os resultados à página. */

let titulo8 = document.createElement("h2");
    titulo8.textContent = "Kata 8";
    document.body.appendChild(titulo8);

let paragrafo8 = document.createElement("p");
    paragrafo8.textContent = "Escreva uma função que use 'splice' para remover 'Rohan' de 'lotrCitiesArray' e retorne o novo 'lotrCitiesArray' modificado. Lembre-se de também adicionar os resultados à página. Resposta:" ;
    document.body.appendChild(paragrafo8);

function kata8() {

    let removedElement = lotrCitiesArray.splice(2, 1); // retorna um array com o elemento removido

    let newElement = lotrCitiesArray;
 
    return newElement;
}

criarElemento(kata8());

/* 9- Escreva uma função que use 'splice' para remover todas as cidades depois de 'Dead Marshes' de 'lotrCitiesArray' e retorne o novo 'lotrCitiesArray' modificado. Lembre-se de também adicionar os resultados à página. */

let titulo9 = document.createElement("h2");
    titulo9.textContent = "Kata 9";
    document.body.appendChild(titulo9);

let paragrafo9 = document.createElement("p");
    paragrafo9.textContent = "Escreva uma função que use 'splice' para remover todas as cidades depois de 'Dead Marshes' de 'lotrCitiesArray' e retorne o novo 'lotrCitiesArray' modificado. Lembre-se de também adicionar os resultados à página. Resposta:" ;
    document.body.appendChild(paragrafo9);

function kata9() {

    let removedElement = lotrCitiesArray.splice(5, Number.MAX_VALUE); // retorna um array com o elemento removido

    let newElement = lotrCitiesArray;
 
    return newElement;
}

criarElemento(kata9());

/* 10- Escreva uma função que use 'splice' para adicionar 'Rohan' de volta ao 'lotrCitiesArray' logo depois de 'Gondor' e retorne o novo 'lotrCitiesArray' modificado. Lembre-se de também adicionar os resultados à página. */

let titulo10 = document.createElement("h2");
    titulo10.textContent = "Kata 10";
    document.body.appendChild(titulo10);

let paragrafo10 = document.createElement("p");
    paragrafo10.textContent = "Escreva uma função que use 'splice' para adicionar 'Rohan' de volta ao 'lotrCitiesArray' logo depois de 'Gondor' e retorne o novo 'lotrCitiesArray' modificado. Lembre-se de também adicionar os resultados à página. Resposta:" ;
    document.body.appendChild(paragrafo10);

function kata10() {

    let insertElement = lotrCitiesArray.splice(2, 0, "Rohan");
    
    let newElement = lotrCitiesArray;
 
    return newElement;
}

criarElemento(kata10());

/* 11- Escreva uma função que use 'splice' para renomear 'Dead Marshes' para 'Deadest Marshes' em 'lotrCitiesArray' e retorne o novo 'lotrCitiesArray' modificado. Lembre-se de também adicionar os resultados à página. */

let titulo11 = document.createElement("h2");
    titulo11.textContent = "Kata 11";
    document.body.appendChild(titulo11);

let paragrafo11 = document.createElement("p");
    paragrafo11.textContent = "Escreva uma função que use 'splice' para renomear 'Dead Marshes' para 'Deadest Marshes' em 'lotrCitiesArray' e retorne o novo 'lotrCitiesArray' modificado. Lembre-se de também adicionar os resultados à página. Resposta:" ;
    document.body.appendChild(paragrafo11);

function kata11() {

    let renamedElement = lotrCitiesArray.splice(5, 1, 'Deadest Marshes');

    let newElement = lotrCitiesArray;

    return newElement;
}

criarElemento(kata11());

/* 12- Escreva uma função que usa 'slice' para retornar uma string com os primeiros 14 caracteres de 'bestThing'. Lembre-se de também adicionar os resultados à página. */

let titulo12 = document.createElement("h2");
    titulo12.textContent = "Kata 12";
    document.body.appendChild(titulo12);

let paragrafo12 = document.createElement("p");
    paragrafo12.textContent = "Escreva uma função que usa 'slice' para retornar uma string com os primeiros 14 caracteres de 'bestThing'. Lembre-se de também adicionar os resultados à página. Resposta:" ;
    document.body.appendChild(paragrafo12);

function kata12() {

    let newString = bestThing.slice(0, 14);

    let newElement = newString;

    return newElement;
}

criarElemento(kata12());

/* 13- Escreva uma função que usa 'slice' para retornar uma string com os 12 últimos caracteres de 'bestThing'. Lembre-se de também adicionar os resultados à página. */

let titulo13 = document.createElement("h2");
    titulo13.textContent = "Kata 13";
    document.body.appendChild(titulo13);

let paragrafo13 = document.createElement("p");
    paragrafo13.textContent = "Escreva uma função que usa 'slice' para retornar uma string com os 12 últimos caracteres de 'bestThing'. Lembre-se de também adicionar os resultados à página. Resposta:" ;
    document.body.appendChild(paragrafo13);

function kata13() {

    let newString = bestThing.slice(-12);

    let newElement = newString;

    return newElement;
}

criarElemento(kata13());

/* 14- Escreva uma função que usa 'slice' para retornar uma string com os caracteres entre as posições 23 e 38 de 'bestThing' (ou seja, 'booleano é par'). Lembre-se de também adicionar os resultados à página. */

let titulo14 = document.createElement("h2");
    titulo14.textContent = "Kata 14";
    document.body.appendChild(titulo14);

let paragrafo14 = document.createElement("p");
    paragrafo14.textContent = "Escreva uma função que usa 'slice' para retornar uma string com os caracteres entre as posições 23 e 38 de 'bestThing' (ou seja, 'booleano é par'). Lembre-se de também adicionar os resultados à página. Resposta:" ;
    document.body.appendChild(paragrafo14);

function kata14() {

    let newString = bestThing.slice(23, 38);

    let newElement = newString;

    return newElement;
}

criarElemento(kata14());

/* 15- Escreva uma função que faz exatamente a mesma coisa que a #13 mas use o método 'substring' em vez de 'slice'. Lembre-se de também adicionar os resultados à página. */

let titulo15 = document.createElement("h2");
    titulo15.textContent = "Kata 15";
    document.body.appendChild(titulo15);

let paragrafo15 = document.createElement("p");
    paragrafo15.textContent = "Escreva uma função que faz exatamente a mesma coisa que a #13 mas use o método 'substring' em vez de 'slice'. Lembre-se de também adicionar os resultados à página. Resposta:" ;
    document.body.appendChild(paragrafo15);

function kata15() {

    let newString = bestThing.substring(bestThing.length - 12);

    let newElement = newString;

    return newElement;
}

criarElemento(kata15());

/* 16- Escreva uma função que faça exatamente a mesma coisa que o #14 mas use o método 'substring' em vez de 'slice'. Lembre-se de também adicionar os resultados à página. */

let titulo16 = document.createElement("h2");
    titulo16.textContent = "Kata 16";
    document.body.appendChild(titulo16);

let paragrafo16 = document.createElement("p");
    paragrafo16.textContent = "Escreva uma função que faça exatamente a mesma coisa que o #14 mas use o método 'substring' em vez de 'slice'. Lembre-se de também adicionar os resultados à página. Resposta:" ;
    document.body.appendChild(paragrafo16);


function kata16() {
    
    let newString = bestThing.substring(23, 38);

    let newElement = newString;

    return newElement;
}

criarElemento(kata16());

/* 17- Escreva uma função que use 'pop' para remover a última cidade de 'lotrCitiesArray e retorne o novo array. Lembre-se de também adicionar os resultados à página. */

let titulo17 = document.createElement("h2");
    titulo17.textContent = "Kata 17";
    document.body.appendChild(titulo17);

let paragrafo17 = document.createElement("p");
    paragrafo17.textContent = "Escreva uma função que use 'pop' para remover a última cidade de 'lotrCitiesArray e retorne o novo array. Lembre-se de também adicionar os resultados à página. Resposta:" ;
    document.body.appendChild(paragrafo17);

function kata17() {

    let removedElement = lotrCitiesArray.pop();

    let newElement = lotrCitiesArray;

    return newElement;
}

criarElemento(kata17());

/* 18- Escreva uma função que usa 'push' para adicionar de volta, no final do array, a cidade de 'lotrCitiesArray' que foi removida no #17 e retorne o novo array. Lembre-se de também adicionar os resultados à página. */

let titulo18 = document.createElement("h2");
    titulo18.textContent = "Kata 18";
    document.body.appendChild(titulo18);

let paragrafo18 = document.createElement("p");
    paragrafo18.textContent = "Escreva uma função que usa 'push' para adicionar de volta, no final do array, a cidade de 'lotrCitiesArray' que foi removida no #17 e retorne o novo array. Lembre-se de também adicionar os resultados à página. Resposta:" ;
    document.body.appendChild(paragrafo18);

function kata18() {
    
    let addElement = lotrCitiesArray.push("Deadest Marshes");

    let newElement = lotrCitiesArray;

    return newElement;
}

criarElemento(kata18());

/* 19- Escreva uma função que usa 'shift' para remover a primeira cidade de 'lotrCitiesArray e retorne o novo array. Lembre-se de também adicionar os resultados à página. */

let titulo19 = document.createElement("h2");
    titulo19.textContent = "Kata 19";
    document.body.appendChild(titulo19);

let paragrafo19 = document.createElement("p");
    paragrafo19.textContent = "Escreva uma função que usa 'shift' para remover a primeira cidade de 'lotrCitiesArray e retorne o novo array. Lembre-se de também adicionar os resultados à página. Resposta:" ;
    document.body.appendChild(paragrafo19);

function kata19() {
    
    let removedFirstElement = lotrCitiesArray.shift();

    let newElement = lotrCitiesArray;

    return newElement;
}

criarElemento(kata19());

/* 20- Escreva uma função que use 'unshift' para adicionar de volta, no começo do array, a cidade de 'lotrCitiesArray' que foi removida no #19 e retorne o novo array. Lembre-se de também adicionar os resultados à página. */

let titulo20 = document.createElement("h2");
    titulo20.textContent = "Kata 20";
    document.body.appendChild(titulo20);

let paragrafo20 = document.createElement("p");
    paragrafo20.textContent = "Escreva uma função que use 'unshift' para adicionar de volta, no começo do array, a cidade de 'lotrCitiesArray' que foi removida no #19 e retorne o novo array. Lembre-se de também adicionar os resultados à página. Resposta:" ;
    document.body.appendChild(paragrafo20);

function kata20() {
    
    let addFirstElement = lotrCitiesArray.unshift("Mordor");

    let newElement = lotrCitiesArray;

    return newElement;
}

criarElemento(kata20());