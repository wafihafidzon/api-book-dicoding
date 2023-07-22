const {
  addBooks,
  getAllBooks,
  getBookById,
  editBook,
  deleteBook,
} = require('./handler');

const routes = [
  {
    path: '/books',
    method: 'POST',
    handler: addBooks,
  },
  {
    path: '/books',
    method: 'GET',
    handler: getAllBooks,
  },
  {
    path: '/books/{bookId}',
    method: 'GET',
    handler: getBookById,
  },
  {
    path: '/books/{bookId}',
    method: 'PUT',
    handler: editBook,
  },
  {
    path: '/books/{bookId}',
    method: 'DELETE',
    handler: deleteBook,
  },
];

module.exports = routes;
