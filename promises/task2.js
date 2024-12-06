/*
В цьому завданні вам потрібно використовувати then() та catch() для обробки результатів виконання промісу

1. Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом
<https://jsonplaceholder.typicode.com/todos/1>
2. Функція повинна повертати як результат Promise що повертає об’єкт todo
3. Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом
<https://jsonplaceholder.typicode.com/users/1>
5. Функція повинна повертати як результат Promise що повертає об’єкт user
6. Викорситайте методи Promise.all та Promise.race передавши їм як аргумент масив з викликами функцій з п.п. 1-2. 
Присвойте значення отримані від цих виразів до змінних
*/

function getTodo() {
	return fetch('https://jsonplaceholder.typicode.com/todos/1')
		.then((response) => {
			if (!response.ok) {
				throw new Error(`Http error! Status: ${response.status}`);
			}
			return response.json();
		})
		.then((todo) => {
			console.log('Todo: ', todo);
			return todo;
		})
		.catch((error) => {
			console.error('Error', error);
			throw error;
		});
}

function getUser() {
	return fetch('https://jsonplaceholder.typicode.com/users/1')
		.then((response) => {
			if (!response.ok) {
				throw new Error(`Http error! Status: ${response.status}`);
			}
			return response.json();
		})
		.then((user) => {
			console.log('User: ', user);
			return user;
		})
		.catch((error) => {
			console.error('Error', error);
			throw error;
		});
}

Promise.all([getTodo(), getUser()])
	.then((results) => {
		const [todo, user] = results;
		console.log('Results from Promise.all:', { todo, user });
	})
	.catch((error) => {
		console.error('Error in Promise.all:', error);
	});

Promise.race([getTodo(), getUser()])
	.then((firstResolved) => {
		console.log('First resolved from Promise.race: ', firstResolved);
	})
	.catch((error) => {
		console.error('Error in Promise.race: ', error);
	});
