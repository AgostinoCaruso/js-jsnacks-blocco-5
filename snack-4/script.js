const posts = [
  { author: 'Marco', date: '12/3/2021', content: 'lorem ipsum...' },
  { author: 'Luca', date: '30/6/2021', content: 'lorem ipsum...' },
  { author: 'Fabrizio', date: '12/9/2020', content: 'lorem ipsum...' },
  { author: 'Enrico', date: '09/12/2021', content: 'lorem ipsum...' },
]

// Crea un nuovo array coi nomi di tutti gli autori
// Risultato: ['Marco', 'Luca', 'Fabrizio', 'Enrico']

//come per il 3 io posso farlo sia con un foreach che con un map

//forEach
const authorName = [];
posts.forEach((names) => authorName.push(names.author));
//console.log(authorName);

//map
const authorNames2 = posts.map((names) => names.author);
//console.log(authorNames2);