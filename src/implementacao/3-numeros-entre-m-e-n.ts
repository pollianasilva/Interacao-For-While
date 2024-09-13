/* # Exibir números entre M e N
Faça um programa que leia dois números M e N, e mostre todos os números entre eles na tela 
(o usuário deve informar um valor para M menor que o valor de N).
 */
function mostrarNumerosEntreMeN(M: number, N:number):void {
let i = M + 1; 
while ( i< N) {
    console.log(i);
    i++;
}
  
}

// Teste
mostrarNumerosEntreMeN(2,8);  // Exibirá: De 3 a 7

/* Outra forma de fazer
function mostrarNumerosEntreMeN(m: number, n: number): void {
  for (let i = m + 1; i < n; i++) {
    console.log(i); 
  }
}

const m: number = 5;
const n: number = 18;

mostrarNumerosEntreMeN(m, n); */