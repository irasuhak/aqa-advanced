// Створіть 2 класи, які будуть мати в собі методи що реалізують функції з попереднього завдання.

class TodoService {
	async fetchData(url, options = {}) {
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

	async getTodo() {
		try {
			const todo = await this.fetchData('https://jsonplaceholder.typicode.com/todos/1');
			console.log('Get todo: ', todo);
			return todo;
		} catch (error) {
			console.error('Error in getTodo:', error);
			throw error;
		}
	}
}

class UserService {
	async fetchData(url, options = {}) {
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

	async getUser() {
		try {
			const user = await this.fetchData('https://jsonplaceholder.typicode.com/users/1');
			console.log('Get user: ', user);
			return user;
		} catch (error) {
			console.error('Error in getUser:', error);
			throw error;
		}
	}
}

async function fetchAllData() {
	const todoService = new TodoService();
	const userService = new UserService();

	try {
		const [todo, user] = await Promise.all([todoService.getTodo(), userService.getUser()]);
		console.log('Results from Promise.all:', { todo, user });
	} catch (error) {
		console.error('Error in Promise.all:', error);
	}
}

async function fetchFirstData() {
	const todoService = new TodoService();
	const userService = new UserService();

	try {
		const firstResolved = await Promise.race([todoService.getTodo(), userService.getUser()]);
		console.log('First resolved from Promise.race: ', firstResolved);
	} catch (error) {
		console.error('Error in Promise.race: ', error);
	}
}

fetchAllData();
fetchFirstData();
