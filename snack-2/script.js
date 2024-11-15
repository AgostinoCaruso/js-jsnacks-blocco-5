const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'

//qua come per l'esempio di prima visto che non devo tornare nulla, posso usare un forEach, andando a prendere la propietà dell'oggetto 
people.forEach((person) => console.log(person.name));