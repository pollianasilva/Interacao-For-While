/*# Exibir números de 0 a 40
Faça um programa que mostre todos os números de 0 a 40.*/

function mostrarNumeros(): void {
   let i = 0;
   while (i <= 40) { 
    console.log(i);
    i++;
   }

}

mostrarNumeros();


/* Outra forma de fazer

function mostrarNumeros(limitar: number) {
    for (let i = 0; i <= limitar; i++) {
      console.log(i);
    }
  }

  mostrarNumeros(40)


*/