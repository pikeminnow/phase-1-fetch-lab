
// To pass the tests, don't forget to return your fetch!
function fetchBooks() {
  let books = [];
  fetch('https://anapioficeandfire.com/api/books').then((response) => {
    console.log(response);
    return response.json();
  }).then((data) => {
    console.log(data);
    books.push(data);
    return books;
  });
};

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
};
document.addEventListener('DOMContentLoaded', function () {
  const books = fetchBooks();
  renderBooks(books);
});
debugger;
