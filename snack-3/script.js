const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]

//qua visto che devo tornare un nuovo array o lo creo con for each esterno
const arrayNum = [];
numbers.forEach((num) => arrayNum.push(num+1));
//console.log(arrayNum);

//oppure con un map che torna automaticamente un array uguale a quello dato, ovviamente lo devo assegnare ad una costante o let senno non salvo i dati

const arrayNum2 = numbers.map((num) => num+1);
console.log(arrayNum2);