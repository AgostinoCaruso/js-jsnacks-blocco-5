const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

//essendo che qua NON vuole TUTTA l'array indietro non posso usare map, ma filter oppure sempre forEach, for of , for semplice

//forEach
const numsEven = [];
nums.forEach((num) => num % 2 == 0 ? numsEven.push(num) : 0);

console.log(numsEven);