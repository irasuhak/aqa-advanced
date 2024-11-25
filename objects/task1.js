/*
Завдання 1
1. Створіть порожній об'єкт з ім'ям student.
2. Додайте до об'єкта student наступні властивості:
    firstName: рядок, представляє ім'я студента.
    lastName: рядок, представляє прізвище студента.
    age: число, представляє вік студента.
    courses: масив, представляє список курсів, які він вивчає (наприклад, ["Математика", "Історія", "Програмування"]).
3. Виведіть об'єкт student в консоль.
*/

const student = {};

student.firstName = 'James'; 
student.lastName = 'Potter';
student.age = 16; 
student.courses = ['Transfiguration', 'Potions', 'Defence afainst the dark arts' ];

console.log(student);