/*
1. В окремому файлі створіть клас "Електронна книга" (EBook), який буде успадковувати властивості та методи класу Book. 
Додайте до класу EBook нову властивість, наприклад, "формат файлу". 
Сторіть метод printInfo для EBook таким чином щоб друкувалась вся доступна інформація про екземляр EBook 
(все те саме що і для Book але ще формат файлу). 
Створіть інстанс (екземпляр) класу EBook та викличте метод printInfo

3. 3. Геттери та сеттери: Додайте геттери та сеттери для всіх властивостей класу Book та EBook. 
В сеттерах необхідно додати валідацію для переданих значень. Використовуйте їх для зміни та отримання значень властивостей.

5. Створіть статичний метод для EBook який буде приймати як аргументи екземпляр класу Book 
і формат файлу як рядок та повертати екземпляр класу EBook.
*/

import { Book } from "./Book.js";

export class EBook extends Book {
    constructor (title, author, year, fileFormat) {
        super(title, author, year);
        this._fileFormat = fileFormat;
    }

    get fileFormat() {
        return this._fileFormat;
    }

    set fileFormat(fileFormat) {
        const allowedFormats = ['PDF', 'EPUB', 'TXT', 'MOBI'];

        if (!allowedFormats.includes(fileFormat)) {
            throw new Error(`File format must be one of the following: ${allowedFormats.join(', ')}`);
        }
        this._fileFormat = fileFormat;
    }

    printInfo() {
        console.log(`${this.title} by ${this.author}, published in ${this.year}. Available file format is ${this.fileFormat}.`);
    }

    static createEBook (book, fileFormat) {
        if (typeof fileFormat !== 'string' || fileFormat.trim() === '') {
            throw new Error('File must be a non-empty string');
        }

        return new EBook(book.title, book.author, book.year, fileFormat)
    }
}