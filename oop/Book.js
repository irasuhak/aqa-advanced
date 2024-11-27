/* 
1. Створіть клас "Книга" (Book) з властивостями, такими як "назва", "автор" і "рік видання". 
Додайте метод до класу Book, який буде виводити повний опис книги наприклад printInfo. 
Створіть кілька об'єктів цього класу та викличте printInfo для кожного екземпляру.

3. Геттери та сеттери: Додайте геттери та сеттери для всіх властивостей класу Book та EBook. 
В сеттерах необхідно додати валідацію для переданих значень. Використовуйте їх для зміни та отримання значень властивостей.

4. Створіть статичний метод в класі Book, який буде приймати масив об'єктів(екземрлярів) книг 
та повертати найдавнішу книгу за роком видання. 
Викличте його в коді передавши масив книг (серед них мають бути екземляри обох класів Book та EBook)
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

    set title(title) {
        if (typeof title !== 'string' || title.trim() === '') {
            throw new Error('Title must be a non-empty string.');
        }
        this._title = title;
    }

    get author() {
        return this._author;
    }

    set author(author) {
        if (typeof author !== 'string' || author.trim() === '') {
            throw new Error('Author must be a non-empty string.');
        }
        this._author = author;
    }

    get year() {
        return this._year;
    }

    set year(year) {
        if (!Number.isInteger(year) || year <= 0) {
            throw new Error(' Year must be a postive integer.')
        }
        this._year = year;
    }    

    printInfo() {
        console.log(`${this.title} by ${this.author}, published in ${this.year}.`);
    }
    
    static findOldestBook(books) {
        return books.reduce((oldest, current) => {
            if (current.year < oldest.year) {
                return current;
            } else {
                return oldest;
            }
        });
    }
}