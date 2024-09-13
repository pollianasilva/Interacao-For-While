/* # Tabela de conversão de polegadas para centímetros
Faça um programa que gera uma tabela de conversão de polegadas para centímetros, de 1 a 20. Considere 1 pol = 2.54cm.
*/ 

function tabelaConversao(): void {
    const conversao: number = 2.54;


    for (let polegadas = 1; polegadas <= 20; polegadas++) {
        let centimetros = polegadas * conversao;
        console.log(`${polegadas} polegada(s) = ${centimetros.toFixed(2)} cm`);

        
    }
    
}

// Teste
tabelaConversao();


/* 
function tabelaConversao(): void {
    let polegadaParaCentimetro = 2.54;

    console.log("Polegadas | Centímetros");
    console.log("-----------------------");

    for (let polegadas = 1; polegadas <= 20; polegadas++) {
        let centimetros = polegadas * polegadaParaCentimetro;
        console.log(${polegadas.toFixed(2).padStart(10)} | ${centimetros.toFixed(2).padStart(12)});
}
}

tabelaConversao();
*/
