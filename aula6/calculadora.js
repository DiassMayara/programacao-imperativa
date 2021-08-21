// Calculadora Nível I

//Adição
function adicionar (numberA,numberB){
    return numberA + numberB;
    
}

console.log(adicionar(10,5));

//Subtração
function subtracao (numberA,numberB){
    return numberA - numberB;
    
}

console.log(subtracao(8,4));

//Multiplicação
function multiplicacao (numberA,numberB){
    return numberA * numberB;
    
}

console.log(multiplicacao(4,5));

//Divisão
function divisao (numberA,numberB){
    return numberA / numberB;
    
}

console.log(divisao(10,2));

//Calculadora Nivel II

// console.log("Teste de Operações/Calculadora");

// console.log(adicionar(10,5));
// console.log(subtracao(10,5));
// console.log(multiplicacao(10,5));
// console.log(divisao(10,5));

// console.log(divisão(10,0));

//Calculadora Nivel III - Funções Extras

//Número ao quadrado
function quadradoDoNumero(numberA){
    return multiplicacao (numberA,numberA);
    
}

console.log((quadradoDoNumero(5)));


// Media de Três

function mediaDeTresNumeros(numberA, numberB, numberC){
    return  (adicionar (numberA,numberB) + (numberC)) / (divisao (3,1));
    
}


console.log(mediaDeTresNumeros(10,10,10));


// Porcentagem

function calculaPorcentagem (numberA, numberB){
    return multiplicacao (numberA, numberB) / divisao(100,1) + "%";
   
    
}
console.log(calculaPorcentagem(500,35));

// Gerador de Porcentagem

function geradorDePorcentagem(numberA, numberB){
    return (multiplicacao (numberA, 100)) / multiplicacao (1, numberB) + "%";

}
console.log(geradorDePorcentagem(2,100));