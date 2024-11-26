/* 
Створіть клас "Книга" (Book) з властивостями, такими як "назва", "автор" і "рік видання". 
Додайте метод до класу Book, який буде виводити повний опис книги наприклад printInfo. 
Створіть кілька об'єктів цього класу та викличте printInfo для кожного екземпляру.
*/

class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    printInfo() {
        console.log(`${this.title} by ${this.author}, published in ${this.year}.`);
    }
}
