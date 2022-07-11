"use strict";
const book = {
    id: 1,
    title: 'My title',
    author: 'Dominicode'
};
const books = [];
function getBook() {
    return { id: 1, title: 'My title', author: 'Diego' };
}
const myBook = getBook();
function createBook(book) {
    return book;
}
const newBook = {
    id: 2,
    title: 'My title',
    author: 'Dominicode',
    coAuthor: 'Diego'
};
createBook(newBook);
