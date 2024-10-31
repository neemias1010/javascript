// 1. Par ou Ímpar
// Crie uma função chamada `parOuImpar` que recebe um número (tipo: Number).
// Utilize o operador de mod (%) e uma estrutura condicional `if` para retornar "Par" ou "Ímpar".

function parOuImpar(numero) {
    if (numero % 2 === 0) {
        return "par"
    } else {
        return "impar";
    }
}

console.log(parOuImpar (4));
console.log(parOuImpar(7));




// 2. Maior de Três
// Crie uma função chamada `maiorDeTres` que recebe três números (tipo: Number).
// Crie uma lógica de programação para retornar o maior número.

function maiorDeTres(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}



// 3. Verificação de Idade
// Crie uma função chamada `verificaIdade` que recebe a idade (tipo: Number).
// Utilize uma estrutura condicional `if` para retornar "Menor de idade" ou "Maior de idade".

function verificaIdade(idade) {
    if (idade < 18) {
        return "Menor de idade";
    } else {
        return "Maior de idade";
    }
}


// 4. Classificação de Notas
// Crie uma função chamada `classificaNota` que recebe uma nota (tipo: Number).
// Utilize `if`, `else if` e `else` para retornar "Aprovado", "Recuperação" ou "Reprovado".

function classificaNota(nota) {
    if (nota >= 7) {
        return "Aprovado";
    } else if (nota >= 5) {
        return "Recuperação";
    } else {
        return "Reprovado";
    }
}


// 5. Dia da Semana
// Crie uma função chamada `diaDaSemana` que recebe um número (tipo: Number) de 1 a 7.
// Utilize uma estrutura `switch` para retornar o nome do dia da semana correspondente.
function diaDaSemana(dia) {
    switch (dia) {
        case 1:
            return "Domingo";
        case 2:
            return "Segunda-feira";
        case 3:
            return "Terça-feira";
        case 4:
            return "Quarta-feira";
        case 5:
            return "Quinta-feira";
        case 6:
            return "Sexta-feira";
        case 7:
            return "Sábado";
        default:
            return "Número inválido. Por favor, insira um número de 1 a 7.";
    }
}


// 6. Classificação de Animal
// Crie uma função chamada `classificaAnimal` que recebe uma string representando um animal dentre os seguintes: cachorro, gato, passarinho, salmão, lagarto.
// Utilize uma estrutura `switch` para retornar se é "Mamífero", "Ave", "Anfíbio", "Peixe".


function classificaAnimal(animal) {
    switch (animal.toLowerCase()) {
        case "cachorro":
        case "gato":
            return "Mamífero";
        case "passarinho":
            return "Ave";
        case "salmão":
            return "Peixe";
        case "lagarto":
            return "Réptil";
        default:
            return "Classificação desconhecida";
    }
}


// 7. Calculadora Simples
// Crie uma função chamada `calculadora` que recebe dois números e uma string representando uma operação (soma, subtração, multiplicação, divisão).
// Utilize uma estrutura `switch` para retornar o resultado da operação.

    switch (operacao) {
        case "soma":
            return num1 + num2;
        case "subtração":
            return num1 - num2;
        case "multiplicação":
            return num1 * num2;
        case "divisão":
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return "Erro: Divisão por zero";
            }
        default:
            return "Operação inválida. Utilize: soma, subtração, multiplicação ou divisão.";
    }

    function calculadora(num1, num2, operacao) {
        switch (operacao) {
            case "soma":
                return num1 + num2;
            case "subtração":
                return num1 - num2;
            case "multiplicação":
                return num1 * num2;
            case "divisão":
                if (num2 !== 0) {
                    return num1 / num2;
                } else {
                    return "Erro: Divisão por zero";
                }
            default:
                return "Operação inválida. Utilize: soma, subtração, multiplicação ou divisão.";
        }
    }


// 8. Par ou Ímpar em uma Lista
// Crie uma função chamada `listaParOuImpar` que recebe um array de números.
// Utilize o método `map()` e uma estrutura condicional `if` para retornar uma nova lista com "Par" ou "Ímpar" para cada número.




// 9. Mensagem de Boas-Vindas
// Crie uma função chamada `mensagemBoasVindas` que recebe um nome (tipo: String) e um horário (tipo: Number).
// Utilize uma estrutura condicional `if`, `else if` e `else` para retornar uma mensagem apropriada: "Bom dia", "Boa tarde" ou "Boa noite".

function mensagemBoasVindas(nome, horario) {
    let saudacao;
}
    if (horario >= 5 && horario < 12) {
        saudacao = "Bom dia";
    } else if (horario >= 12 && horario < 18) {
        saudacao = "Boa tarde";
    } else {
        saudacao = "Boa noite";
    }




// 10. Classificação de Filmes
// Crie uma função chamada `classificaFilme` que recebe uma nota (tipo: Number) de um filme.
// Utilize uma estrutura condicional `if`, `else if` e `else` para retornar "Excelente" (nota 8 ou mais), 
// "Bom" (nota de 5 a 7) ou "Ruim" (nota abaixo de 5).


function classificaFilme(nota) {
    if (nota >= 8) {
        return "Excelente";
    } else if (nota >= 5) {
        return "Bom";
    } else {
        return "Ruim";
    }
}






























Wd







// 2. Maior de Três
// Crie uma função chamada `maiorDeTres` que recebe três números (tipo: Number).
// Crie uma lógica de programação para retornar o maior número.


// 3. Verificação de Idade
// Crie uma função chamada `verificaIdade` que recebe a idade (tipo: Number).
// Utilize uma estrutura condicional `if` para retornar "Menor de idade" ou "Maior de idade".


// 4. Classificação de Notas
// Crie uma função chamada `classificaNota` que recebe uma nota (tipo: Number).
// Utilize `if`, `else if` e `else` para retornar "Aprovado", "Recuperação" ou "Reprovado".


// 5. Dia da Semana
// Crie uma função chamada `diaDaSemana` que recebe um número (tipo: Number) de 1 a 7.
// Utilize uma estrutura `switch` para retornar o nome do dia da semana correspondente.


// 6. Classificação de Animal
// Crie uma função chamada `classificaAnimal` que recebe uma string representando um animal dentre os seguintes: cachorro, gato, passarinho, salmão, lagarto.
// Utilize uma estrutura `switch` para retornar se é "Mamífero", "Ave", "Anfíbio", "Peixe".


// 7. Calculadora Simples
// Crie uma função chamada `calculadora` que recebe dois números e uma string representando uma operação (soma, subtração, multiplicação, divisão).
// Utilize uma estrutura `switch` para retornar o resultado da operação.

// 8. Par ou Ímpar em uma Lista
// Crie uma função chamada `listaParOuImpar` que recebe um array de números.
// Utilize o método `map()` e uma estrutura condicional `if` para retornar uma nova lista com "Par" ou "Ímpar" para cada número.
//function listaParOuImpar(numeros) {
//    return numeros.map(numero => (numero % 2 === 0 ? "Par" : "Ímpar"));
//}

// 9. Mensagem de Boas-Vindas
// Crie uma função chamada `mensagemBoasVindas` que recebe um nome (tipo: String) e um horário (tipo: Number).
// Utilize uma estrutura condicional `if`, `else if` e `else` para retornar uma mensagem apropriada: "Bom dia", "Boa tarde" ou "Boa noite".


// 10. Classificação de Filmes
// Crie uma função chamada `classificaFilme` que recebe uma nota (tipo: Number) de um filme.
// Utilize uma estrutura condicional `if`, `else if` e `else` para retornar "Excelente" (nota 8 ou mais), 
// "Bom" (nota de 5 a 7) ou "Ruim" (nota abaixo de 5).



function classificaFilme(nota) {
    if (nota > = 8) {
        console.log( ' o filme recebeu nota  ${nota} e execelente' )
    } else if (nota < 8 && nota >= 5) {
        console.log ('o filme recebeu nota ${ nota}e bom')
    }else {
        console.log('o filme recebeu nota ${nota}e e uma m****')
    }
}
classificarFilme(6,5)
