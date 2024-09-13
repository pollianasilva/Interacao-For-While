/* # Soma de intervalos
Escreva um programa que leia dois números inteiros positivos (M, N) que formarão pares. 
Para cada par de números, calcule e exiba a soma de todos os números inteiros de M até N. 
O programa deve continuar solicitando um par de cada vez até que M seja maior que N, momento em que deve ser encerrado.
 */


function somarNumerosEntreMeN(M: number, N: number): any {

let soma:number = 0;
    if (M<=N) {
    for (let i = M; i <= N; i++) {
        soma += i; 


}   
    return soma;
}

}


// Teste
console.log(somarNumerosEntreMeN(2, 5)); 


/* 
function somarNumerosEntreMeN(M: number, N: number): number {

let soma = 0;
let i = M;

      while (i <= N ) {
      soma += i;
    i++;

      }
   return soma;

    }
  const M =5;
  const N =15;

  const resultado = somarNumerosEntreMeN(M, N);
console.log(A soma de números entre ${M} e ${N} é: ${resultado});
*/