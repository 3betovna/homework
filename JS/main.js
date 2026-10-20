// Задача 1.

const firstName = "Анна";
const lastName = "Клец";
const isStudent = true;

console.log(firstName, lastName, isStudent);

// Задача 2.

const age = 29;
let currentYear = 2026;
const birthYear = currentYear - age;

console.log(birthYear);

// Задача 3.

console.log(`Меня зовут ${firstName} ${lastName}, мне ${age} лет. Я ученица курса: ${isStudent}`);

// Задача 4.

let a = '123';
let b = +'456';
let c = Number('789');
let d = Boolean(0);
let e = Boolean(' ');
let result = a + b + c + d + e;

// получилась длинная строка из-за того, что первая переменная - это строка, а дальше всё превращается в строки: 123456789falsetrue

console.log(result);


