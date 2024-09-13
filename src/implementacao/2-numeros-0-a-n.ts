/* # Exibir números de 0 a N
Faça um programa que leia um número N e mostre na tela todos os números de 0 a N.
 */ 
function mostrarNumerosAteN(N: number): any {
    let i = 0;
    while (i <= N) { 
     console.log(i);
     i++;
    }
 
}

//teste
/*console.log(mostrarNumerosAteN(5));*/
mostrarNumerosAteN(20);
