/*
Завдання 5
1. Створіть масив об'єктів users де обєкти мають довільні властивості (наприклад, name, email, age, тощо).
2. Використовуючи цикл for...of, переберіть всі елементи масиву та виведіть їхні значення в консоль.
3. Зробіть деструктуризацію в циклі
*/

const users = [
    {name: 'Sara', age: 25, email: 'someemail@gmail.com'},
    {name: 'Mike', age: 30, email: 'othermail@gmail.com'},
    {name: 'Nick', age: 32, email: 'anotheremail@gmail.com'}
];

for (const {name, email, age} of users) {
    console.log(`${name} is ${age} years old. To contact, write to ${email}`);
};

