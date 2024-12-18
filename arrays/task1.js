/*
Завдання 1: Відстеження кількості позитивних, негативних та нульових чисел

Ваше завдання - написати програму для обчислення кількості позитивних, негативних та нульових чисел у заданому масиві чисел.

1. Створіть масив чисел за допомогою конструкції const numbers = [2, -5, 0, 7, -3, 0, 10, -8].
2. Задайте змінні positiveCount, negativeCount та zeroCount зі значенням 0. 
Вони будуть використовуватись для відстеження кількості позитивних, негативних та нульових чисел в масиві.
3. Використовуючи цикл for, пройдіться по кожному елементу масиву numbers.
4.Перевірте чи число позитивне, негативне чи нульове, та збільште відповідну змінну (positiveCount, negativeCount або zeroCount) на 1.
5. Після завершення циклу виведіть значення змінних positiveCount, negativeCount та zeroCount на консоль.
*/

const numbers = [2, -5, 0, 7, -3, 0, 10, -8, 0, 6, 9, -8, -14];

let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;

for (let number of numbers) {
	if (number > 0) {
		positiveCount++;
	} else if (number < 0) {
		negativeCount++;
	} else {
		zeroCount++;
	}
}

console.log(`Кількість позитивних чисел: ${positiveCount}`);
console.log(`Кількість позитивних чисел: ${negativeCount}`);
console.log(`Кількість позитивних чисел: ${zeroCount}`);
