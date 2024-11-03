/*
Завдання 2: Конкатенація рядків та шаблонний рядок
Створіть дві змінні, які містять імена двох осіб. 
Використовуючи конкатенацію рядків, створіть новий рядок, який містить вітання для обох осіб. Виведіть результат в консоль. 
Потім використайте шаблонний рядок для створення того ж вітання. Виведіть результат в консоль.
*/

let person1 = 'Harry';
let person2 = 'Ron';

let greetingConcat = 'Hello, ' + person1 + ' and ' + person2 + '!';
console.log(greetingConcat);

let greetingTemplate = `Hello, ${person1} and ${person2}!`;
console.log(greetingTemplate);
