/* # Mostrar o segundo maior valor digitado
Faça um programa que leia N números e mostre o segundo maior valor digitado. */


function mostrarSegundoMaiorValor(numeros:number []):number {
    let maior = numeros[0];  
    let segundoMaior = -Infinity;  

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maior) {
            segundoMaior = maior;  
            maior = numeros[i]; 
        } else if (numeros[i] > segundoMaior && numeros[i] < maior) {
            segundoMaior = numeros[i];  
        }
    }

    return segundoMaior;
}

// Teste
console.log(mostrarSegundoMaiorValor([10, 5, 20, 8, 15]));


