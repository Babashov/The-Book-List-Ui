class Book {
  constructor(title,author,isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {

  addBookList(book){
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

  deleteBook(target){
    if(target.className === 'delete')
    {
    target.parentElement.parentElement.remove();
    }
  }

  clearFields(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }
  showAlert(msg,className){
    // Create Div
    const div = document.createElement('div');
    // Add class names to div
    div.className = `alert ${className}`;
    // Add Message Text To Div
    div.appendChild(document.createTextNode(msg));
    // Get Parent Div
    const container = document.querySelector('.container');
    // Get Form Element
    const form = document.getElementById('book-form');
    // Adding div element before form element
    container.insertBefore(div,form);
    // Remove Alert after 3 sec
    setTimeout(function(){
    document.querySelector('.alert').remove();
    },3000)
  }

}

// Event Listener for Add Book
document.getElementById('book-form').addEventListener('submit',function(e){
  // Get Form Values
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;
  
  // Instantiate Book
  const book = new Book(title,author,isbn);
  // Instantiate UI
  const ui = new UI();
  if(title === '' || author === '' || isbn === '')
  {
    ui.showAlert(`Please Enter Input Fields`,'error')
  }else{
    // Add Book Object To UI
    ui.addBookList(book);
    // Show success message
    ui.showAlert('Book Added','success');
    // Clear Input Fields
    ui.clearFields();
  }
  
  e.preventDefault();
});
// Event Listener for Delete Book
document.getElementById('book-list').addEventListener('click',function(e){
  // Instantiate UI Object
  const ui = new UI();
  // Book Delete Method
  ui.deleteBook(e.target);
  // Show Alert
  ui.showAlert('Book Removed','success');
  e.preventDefault();
})