const BooksController = require('./BooksController');
const AccountController = require('./AccountController');
const booksList = require('./test-data/books');
const userList = require('./test-data/user');

let token;
let userId;

beforeAll(async () => {
	token = await AccountController.generateToken();
	expect(token).toBeDefined();
	console.log('Token generated:', token);
	userId = await AccountController.getUserId();
	const response = await BooksController.deleteAllBook(userId, token);
	expect(response.status).toBe(204);
});

test('Get all books', async () => {
	const response = await BooksController.getAllBooks();
	expect(response.status).toBe(200);
	expect(response.data).toHaveProperty('books');
	expect(Array.isArray(response.data.books)).toBe(true);
	console.log('Books list:', response.data.books);
});

test('Get a book by its isbn', async () => {
	const response = await BooksController.getBookByIsbn(booksList[3].isbn);
	expect(response.status).toBe(200);
	console.log('Book info:', response.data);
});

test('Add a book', async () => {
	const response = await BooksController.addBook(userId, booksList[0].isbn, token);
	expect(response.status).toBe(201);
	expect(response.data.books[0].isbn).toBe(booksList[0].isbn);
	console.log('Book added to collection:', response.data);
});

test('Update a book', async () => {
	const updatedIsbn = booksList[2].isbn;
	const response = await BooksController.updateBook(userId, booksList[0].isbn, updatedIsbn, token);
	expect(response.status).toBe(200);
	console.log('Book updated:', response.data);
});

test('Delete all book', async () => {
	const response = await BooksController.deleteAllBook(userId, token);
	expect(response.status).toBe(204);
	console.log('Books are deleted from collection:', response.data);
});
