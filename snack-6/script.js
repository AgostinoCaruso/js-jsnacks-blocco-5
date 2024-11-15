const zucchine = [
  { type: 'Napoletana', weight: 10, length: 4 },
  { type: 'Trombetta', weight: 13, length: 16 },
  { type: 'Napoletana', weight: 4, length: 23 },
  { type: 'Trombetta', weight: 11, length: 6 },
  { type: 'Napoletana', weight: 2, length: 17 },
  { type: 'Romana', weight: 5, length: 10 },
  { type: 'Romana', weight: 7, length: 9 },
  { type: 'Trombetta', weight: 3, length: 8 },
  { type: 'Calabrese', weight: 6, length: 27 },
  { type: 'Calabrese', weight: 14, length: 4 },
];

// A partire dall'array fornito, crea due array. Uno con le zucchine più lunghe di almeno 15cm. L'altro con le restanti.

//essendo che devo iterare per tutto l'array MA ritornare solo alcuni elementi di esso devo usare la filter e non la map, posso usare sempre il forEach

const zuccLunghe = [];
const zuccCorte = [];

zucchine.forEach((zucchina) => zucchina.length >= 15 ? zuccLunghe.push(zucchina) : zuccCorte.push(zucchina));
//console.log(zuccLunghe);

console.log("lunghe");
for(const zucchina of zuccLunghe){
  console.log(zucchina);
}
console.log("corte");
for(const zucchina of zuccCorte){
  console.log(zucchina);
}

const zuccLunghe2 = zucchine.filter((zucchina) => zucchina.length >= 15 ? zucchina : 0);
const zuccCorte2 = zucchine.filter((zucchina) => zucchina.length >= 15 ? 0 : zucchina);

console.log(zuccLunghe2);
console.log(zuccCorte2);