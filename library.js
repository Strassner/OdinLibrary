//import bootstrap from 'bootstrap';
const myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggleRead = function(){
    this.read = !this.read;
    displayBooks();
}

function addBookToLibrary(){
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
    //const infoIndex = myLibrary.indexOf(book);
    displayBooks();
}

function deleteBook(bookIndex){
    console.log(`deleted at ${bookIndex}`)
    myLibrary.splice(bookIndex, 1);
    displayBooks();
}

window.onload = function(){
  let book = new Book('The Hobbit', 'J.R.R. Tolkien', 295, true);
  myLibrary.push(book);
  book = new Book('The Fellowship of the Ring', 'J.R.R. Tolkien', 432, true);
  myLibrary.push(book);   
  displayBooks();
}

function displayBooks(){
    const table = document.createElement('table');
    table.className="nice-table";
    table.innerHTML = `
    <tr>
        <th>Index</th>
        <th>Title</th>
        <th>Author</th>
        <th>Pages</th>
        <th>Read</th>
        <th>Toggle Read</th>
        <th>Delete?</th>
    </tr>`;
    myLibrary.forEach((book, index) =>{
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${index}</td>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.pages}</td>
        <td class="${book.read ? 'read' : 'not-read'}">${book.read ? 'Yes' : 'No'}</td>
        <td><button onclick="myLibrary[${index}].toggleRead()">Toggle Read</button></td>
        <td><button onclick="deleteBook(${index})">Delete</button></td>
        `;
        table.appendChild(row);
    });
    document.getElementById('libraryTable').innerHTML = '';
    document.getElementById('libraryTable').appendChild(table);
}