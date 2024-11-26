import { Book } from "./Book.js";
import { EBook } from "./EBook.js";

const book1 = new Book ('The Great Gatsby', 'F. Scott Fitzgerald', 1925);
const book2 = new Book('To Kill a Mockingbird', 'Harper Lee', 1960);
const book3 = new Book('Pride and Prejudice', 'Jane Austen', 1813);

book1.printInfo();
book2.printInfo();
book3.printInfo();

const ebook1 = new EBook ('Les Misérables', 'Victor Hugo', 1867, 'epub');

ebook1.printInfo();