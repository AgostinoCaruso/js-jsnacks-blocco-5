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

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'

// qua come sempre uso o il find o forEach o anche una destrutturazione

//forEach
const classStudent = {};
let classStudentString = "";   ////con stringa
students.forEach((student) => student.name == "Marco Lanci" 
//? classStudentString = student.class   ////con stringa
? classStudent.class = student.class 
: "non trovato");

console.log(classStudent.class);
//console.log(classStudentString);    ////con stringa

//find
//const classStudent2 = students.find((student) => student.name == "Marco Lanci" ? student.class : "non trovato");
const classStudent2 = students.find((student) => student.name == "Marco Lanci").class;
console.log(classStudent2);

//destrutturazione 
const {class : studentClass } = students.find((nameStudent) => nameStudent.name =="Marco Lanci");
console.log(studentClass);

