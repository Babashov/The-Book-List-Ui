// Book Constructor
function Book(title,author,isbn)
{
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}
// UI Constructor
function UI(){}
// UI addBookList Method
UI.prototype.addBookList = function(book){
  // Get Book List Table
  const list = document.getElementById('book-list');
  // Create tr Element
  const row = document.createElement('tr');
  // Insert Cols
  row.innerHTML = `
  
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href="#" class="delete">X</a></td>  
  `;
  list.appendChild(row);
}
// UI ClearFields
UI.prototype.clearFields = function(){
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}

// Event Listenr
document.getElementById('book-form').addEventListener('submit',function(e){
  // Get Form Values
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;
  
  // Instantiate Book
  const book = new Book(title,author,isbn);
  // Instantiate UI
  const ui = new UI();
  // Add Book Object To UI
  ui.addBookList(book);
  ui.clearFields();
  e.preventDefault();
})