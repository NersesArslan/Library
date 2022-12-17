
 let myLibrary = [book1];

function Book(title, author, status) {
    this.title = title
    this.author = author
    this.status = status
    
   }
   
   const book1 = new Book('Shantaram', 'Gregory David Roberts', 'read')

   function addBooktoLib(){
    let title = prompt("Enter a book's title: ")
    let author = prompt("Enter author's name: ")
    let status = prompt("Enhter reading status: ")
       let book = new Book(title, author, status)
       myLibrary.push(book);
       return myLibrary;
   }

 
   

   