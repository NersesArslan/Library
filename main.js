

let myLibrary = [book1, book2, book3];
 

function Book(title, author) {
    this.title = title
    this.author = author
    
    
   }
   
   const book1 = new Book('Shantaram', 'Gregory David Roberts')
   const book2 = new Book('Les Miserables', 'Victor Hugo' )
   const book3 = new Book('Death and the Dervish', 'Mesa Selimovic')


   
   function addBooktoLib(){
    let title = prompt("Enter a book's title: ")
    let author = prompt("Enter author's name: ")
    
       let book = new Book(title, author)
       myLibrary.push(book);
       return myLibrary;
   }

   
