// Виконайте завдання 2 але використовуючи конструкцію async/await для функції що виконує запити

async function fetchData(url, options = {}) {
	try {
		const response = await fetch(url, options);
		if (!response.ok) {
			throw new Error(`Http error! Status: ${response.status}`);
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error: ', error);
		throw error;
	}
}

async function getTodo() {
	try {
		const todo = await fetchData('https://jsonplaceholder.typicode.com/todos/1');
		console.log('Get todo: ', todo);
		return todo;
	} catch (error) {
		console.error('Error in getTodo:', error);
		throw error;
	}
}

async function getUser() {
	try {
		const user = await fetchData('https://jsonplaceholder.typicode.com/users/1');
		console.log('Get user: ', user);
		return user;
	} catch (error) {
		console.error('Error in getUser:', error);
		throw error;
	}
}

async function fetchAllData() {
	try {
		const [todo, user] = await Promise.all([getTodo(), getUser()]);
		console.log('Results from Promise.all:', { todo, user });
	} catch (error) {
		console.error('Error in Promise.all:', error);
	}
}

async function fetchFirstData() {
	try {
		const firstResolved = await Promise.race([getTodo(), getUser()]);
		console.log('First resolved from Promise.race: ', firstResolved);
	} catch (error) {
		console.error('Error in Promise.race: ', error);
	}
}

fetchAllData();
fetchFirstData();
