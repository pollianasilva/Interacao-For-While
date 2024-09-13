/*# Contar múltiplos de 2 e 5
Faça um programa no qual o usuário insira valores numéricos positivos até digitar -1 e ao final 
informe entre os números digitados quantos são: (a) múltiplos de 2 e 5, simultaneamente; (b) múltiplos de 2 e 3.*/

function contarMultiplos(numeros: number[]): void {
    let multiplos2e5 = 0;
    let multiplos2e3 = 0;

    // Itera sobre todos os números fornecidos
    for (let i = 0; i < numeros.length; i++) {
        let numero = numeros[i];

        // Verifica se o número é -1 para encerrar a contagem
        if (numero === -1) {
            break;
        }

        // Conta os múltiplos de 2 e 5
        if (numero % 2 === 0 && numero % 5 === 0) {
            multiplos2e5++;
        }

        // Conta os múltiplos de 2 e 3
        if (numero % 2 === 0 && numero % 3 === 0) {
            multiplos2e3++;
        }
    }

    // Exibe os resultados
    console.log("Quantidade de números múltiplos de 2 e 5: " + multiplos2e5);
    console.log("Quantidade de números múltiplos de 2 e 3: " + multiplos2e3);
}

// Teste
const numeros = [10, 15, 6, 12, 30, 2, -1];  // 10 e 30 são dvisiveis por 2 e 5 | 6, 12 e 30 são divisiveis entre 2 e 3.
contarMultiplos(numeros);  
