/*
В окремому файлі створіть клас "Електронна книга" (EBook), який буде успадковувати властивості та методи класу Book. 
Додайте до класу EBook нову властивість, наприклад, "формат файлу". 
Сторіть метод printInfo для EBook таким чином щоб друкувалась вся доступна інформація про екземляр EBook 
(все те саме що і для Book але ще формат файлу). 
Створіть інстанс (екземпляр) класу EBook та викличте метод printInfo
*/

import { Book } from "./Book.js";

export class EBook extends Book {
    constructor (title, author, year, fileFormat) {
        super(title, author, year);
        this.fileFormat = fileFormat;
    }

    printInfo() {
        console.log(`${this.title} by ${this.author}, published in ${this.year}. Available file format is ${this.fileFormat}.`);
    }
}