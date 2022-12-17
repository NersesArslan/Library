



 

function Book(title, author) {
    this.title = title
    this.author = author
    
    
   }
   
   const book1 = new Book('Shantaram', 'Gregory David Roberts')
   const book2 = new Book('Les Miserables', 'Victor Hugo' )
   const book3 = new Book('Death and the Dervish', 'Mesa Selimovic')

   let myLibrary = [book1, book2, book3];

  ;

  const addButton = document.getElementById('btn');
  const shelf = document.querySelector('.shelf')
  

  addButton.addEventListener('click', () => {
    const book = document.createElement('div')
  book.classList.add('book')
    shelf.appendChild(book);
    
  })