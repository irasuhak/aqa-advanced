/*
Задача:
створити 5 запитів за допомогою методів GET, POST
обов'язково має бути перевірка респонсу - response status, data на коректність згідно з документацією по АПІ
 */

const axiosClient = require('./axiosClient');

describe('API tests for JSONPlaceholder', () => {
	const BASE_URL = 'https://jsonplaceholder.typicode.com/';

	test('Get all posts', async () => {
		const response = await axiosClient.get('/posts');

		console.log(response.data);

		expect(response.status).toEqual(200);
		expect(Array.isArray(response.data)).toBeTruthy();
		expect(response.data.length).toBeGreaterThan(0);

		response.data.forEach((post) => {
			expect(post).toHaveProperty('id');
			expect(post).toHaveProperty('userId');
			expect(post).toHaveProperty('title');
			expect(post).toHaveProperty('body');
		});
	});

	test('Get a post by id', async () => {
		const postId = 5;
		const response = await axiosClient.get(`/posts/${postId}`)

		console.log(response.data);

		expect(response.status).toEqual(200);
		expect(response.data).toHaveProperty('id', postId);
		expect(response.data).toHaveProperty('title');
		expect(response.data).toHaveProperty('body');
		expect(response.data).toHaveProperty('userId');
	});

	test('Get all comments for a specific post', async () => {
		const postId = 1;
		const response = await axiosClient.get(`/posts/${postId}/comments`);
	
		console.log(response.data);

		expect(response.status).toEqual(200);
		expect(Array.isArray(response.data)).toBeTruthy();
		expect(response.data.length).toBeGreaterThan(0);

		response.data.forEach((comment) => {
			expect(comment).toHaveProperty('id');
			expect(comment).toHaveProperty('postId', postId);
			expect(comment).toHaveProperty('name');
			expect(comment).toHaveProperty('email');
			expect(comment).toHaveProperty('body');
		});
	});

	test('Get comments by postId', async () => {
		const postId = 3;
		const response = await axiosClient.get(`/comments`, {
			params: {
				postId,
			},
		});

		console.log(response.data);

		expect(response.status).toEqual(200);
		expect(Array.isArray(response.data)).toBeTruthy();
		expect(response.data.length).toBeGreaterThan(0);

		response.data.forEach((comment) => {
			expect(comment).toHaveProperty('id');
			expect(comment).toHaveProperty('postId', postId);
			expect(comment).toHaveProperty('name');
			expect(comment).toHaveProperty('email');
			expect(comment).toHaveProperty('body');
		});
	});

	test('Create a new post', async () => {
		const newPost = {
			title: 'New Test Post',
			body: 'This is test text for body.',
			userId: 1,
		};

		const response = await axiosClient.post(`/posts`, newPost);
		
		console.log(response.data);

		expect(response.status).toEqual(201);
		expect(response.data).toHaveProperty('id');
		expect(response.data).toHaveProperty('userId', newPost.userId);
		expect(response.data).toHaveProperty('title', newPost.title);
		expect(response.data).toHaveProperty('body', newPost.body);
	});
});
