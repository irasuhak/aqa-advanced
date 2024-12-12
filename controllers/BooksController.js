const RootController = require('./RootController');

class BooksController extends RootController {

    async getAllBooks() {
        return await this.axiosInstance.get('/BookStore/v1/Books');
    }

    async getBookByIsbn(isbn) {
        return this.axiosInstance.get(`/BookStore/v1/Book`, {
            params: {
                ISBN: isbn
            },
            headers: {
                'accept': 'application/json',
            }
        });
    }

    async addBook(userId, bookId, token) {
        return this.axiosInstance.post(`/BookStore/v1/Books`, {
            "userId": userId,
            "collectionOfIsbns": [
                {
                    "isbn": bookId
                }
            ]
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
    }

    async updateBook(userId, isbn, newIsbn, token) {
        return this.axiosInstance.put(`/BookStore/v1/Books/${isbn}`, {
            "userId": userId,
            "isbn": newIsbn
        }, {
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
    }
    
    async deleteAllBook(userId, token) {
        return this.axiosInstance.delete(`/BookStore/v1/Books?UserId=${userId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    }
}

module.exports = new BooksController();