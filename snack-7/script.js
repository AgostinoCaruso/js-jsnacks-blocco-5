const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera i dati dello studente con id 2
// Risultato: { id: 2, name: 'Mario Banfi', age: 34, class: '4A' }

//qui devo soltanto recuperare un oggetto tramite una key e devo usare il find, oppure sempre il forEach

let studentObj = {};
students.forEach((student) => student.id === 2 ? studentObj = student : "non trovato");
console.log(studentObj);

const studentObj2 = students.find((student) => student.id === 2 ? student : "non trovato");
console.log(studentObj);