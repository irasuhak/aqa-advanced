/* 
1. Створіть клас "Книга" (Book) з властивостями, такими як "назва", "автор" і "рік видання". 
Додайте метод до класу Book, який буде виводити повний опис книги наприклад printInfo. 
Створіть кілька об'єктів цього класу та викличте printInfo для кожного екземпляру.

3. Геттери та сеттери: Додайте геттери та сеттери для всіх властивостей класу Book та EBook. 
В сеттерах необхідно додати валідацію для переданих значень. Використовуйте їх для зміни та отримання значень властивостей.
*/

export class Book {
    constructor(title, author, year) {
        this._title = title;
        this._author = author;
        this._year = year;
    }

    get title() {
        return this._title;
    }

    set title(newTitle) {
        if (typeof newTitle !== 'string' || newTitle.trim() === '') {
            throw new Error('Title must be a non-empty string.');
        }
        this.title = newTitle;
    }

    get author() {
        return this._author;
    }

    set author(newAuthor) {
        if (typeof newAuthor !== 'string' || newAuthor.trim() === '') {
            throw new Error('Author must be a non-empty string.');
        }
        this._author = newAuthor;
    }

    get year() {
        return this._year;
    }

    set year(newYear) {
        if (!Number.isInteger(newYear) || newYear <= 0) {
            throw new Error(' Year must be a postive integer.')
        }
        this._year = newYear;
    }
        

    printInfo() {
        console.log(`${this.title} by ${this.author}, published in ${this.year}.`);
    }
}