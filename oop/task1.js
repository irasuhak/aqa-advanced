import { Book } from "./Book.js";
import { EBook } from "./EBook.js";


const book1 = new Book ('The Great Gatsby', 'F. Scott Fitzgerald', 1925);
const book2 = new Book('To Kill a Mockingbird', 'Harper Lee', 1960);
const book3 = new Book('Pride and Prejudice', 'Jane Austen', 1813);

const ebook1 = new EBook ('Les Misérables', 'Victor Hugo', 1867, 'EPUB');
const ebook2 = new EBook("1984", "George Orwell", 1949, "PDF");

book1.printInfo();
book2.printInfo();
book3.printInfo();
ebook1.printInfo();

console.log('\n---Testing getter---');
console.log(`Title of book1: ${book1.title}`);
console.log(`Author of book2: ${book2.author}`);
console.log(`Year of book3: ${book3.year}`);
console.log(`File format of eBook1: ${ebook1.fileFormat}`);


console.log('\n---Testing setter---');

// Correct 
book2.year = 1961;
console.log(`Updated year of book2: ${book2.year}`);

// Wrong
try {
    book1.year = 'not a number';
} catch (error) {
    console.error(`Error updating: ${error.message}`);
}

try {
    book2.author = '';
} catch (error) {
    console.error(`Error updating: ${error.message}`);
}

try {
    ebook1.fileFormat = 'DOCX';
} catch (error) {
    console.error(`Error updating: ${error.message}`);
}


// Static methods 
console.log('\n---Oldest book---');

const booksArray = [book1, book2, book3, ebook1, ebook2];
const oldestBook = Book.findOldestBook(booksArray);

console.log('The oldest book is: ');
oldestBook.printInfo();


