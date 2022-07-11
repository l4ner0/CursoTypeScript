interface Book {
    id: number;
    title: String;
    author: String;
    coAuthor?: String;
    isLoan?: (id: number) => void
}

const book: Book = {
    id: 1,
    title: 'My title',
    author: 'Dominicode'
};

const books: Array<Book> = [];

function getBook(): Book {
    return {id: 1, title: 'My title', author: 'Diego'}
}

const myBook = getBook();

function createBook(book: Book): Book {
    return book;
}

const newBook: Book = {
    id: 2,
    title: 'My title',
    author: 'Dominicode',
    coAuthor: 'Diego'
}
createBook(newBook);