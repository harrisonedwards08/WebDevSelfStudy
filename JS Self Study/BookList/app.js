class Book{
    constructor(author, title, isbn){
        this.author = author
        this.title = title
        this.isbn = isbn
        this.isDone = false
    }
}


class Store{
    static getBooks(){
        let books;
        if(localStorage.getItem('books') === null){
            books = [];
        }else{
            books = JSON.parse(localStorage.getItem('books'))
        }

        return books;

    }

    static addBook(book){

        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));

    }
    static removeBook(isbn){
        const books = Store.getBooks();

        books.forEach((book,index) => {
            if (book.isbn === isbn) {
                books.splice(index,1)
            }
        })
        localStorage.setItem('books',JSON.stringify(books))
    }
}

//UI class
class UI{
    static displayBooks(){
        const StoredBooks = Store.getBooks()

        const books = StoredBooks;
        books.forEach((book) => UI.addBookToList(book));
    }
    static addBookToList(book){
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href = '#' class = "btn btn-danger btn-sm delete">X </a> </td>

        `;

        list.appendChild(row)
    }

    static showAlert(message,className){
        const div = document.createElement('div')
        div.className = `alert alert-${className}`
        div.appendChild(document.createTextNode(message))
        const container = document.querySelector('.container')
        const form = document.querySelector('#book-form')
        container.insertBefore(div,form)
        setTimeout(() => document.querySelector('.alert').remove(),3000)

    }

    

    static clearFields(){
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';

    }

    static deleteBook(el){
        if (el.classList.contains('delete')){
            const row = el.parentElement.parentElement
            const title = row.firstElementChild.textContent
            row.remove()
            this.showAlert(`${title} deleted`,'info')
        }
    }
}

//store class

//event: display books

document.addEventListener('DOMContentLoaded',UI.displayBooks)

//event: add book

const bookSubmit = document.querySelector('Add Book')
document.querySelector('#book-form').addEventListener('submit',(e) =>

// get form values
{
    e.preventDefault()

    const title = document.querySelector('#title').value
    const author = document.querySelector('#author').value
    const isbn = document.querySelector('#isbn').value


    if (title === '' || author === '' || isbn === ''){
        UI.showAlert('fill','danger')
    }else{
          //instantiate book
    const book = new Book(title,author,isbn)
    UI.addBookToList(book)
    UI.showAlert(`${book.title} added`,'success')
    Store.addBook(book)

    }

  

    //clear fields
    UI.clearFields();

})

//event: remove book

const bookDelete = document.querySelector("#book-list").addEventListener('click',(e) => {
    UI.deleteBook(e.target)
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent)
})