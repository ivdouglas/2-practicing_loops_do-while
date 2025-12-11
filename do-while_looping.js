let opcoes = [1, 2, 3]; 

let indice = 0; 

let opcao; 

do { 

opcao = opcoes[indice]; 

if (opcao === 1) { 

console.log("Ver saldo"); 

} else if (opcao === 2) { 

console.log("Fazer depósito"); 

} else if (opcao === 3) { 

console.log("Sair"); 

} 

indice++; 

} while (opcao !== 3);