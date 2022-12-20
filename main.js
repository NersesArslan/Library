
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}
   
   let myLibrary = [];

   const shelf = document.querySelector('.shelf')
   const btn = document.getElementById('btn')

   const loopThroughLibrary = (arr) => {   //function that loops through Library array
    (arr.map(book => book.title + " - " + book.author)).forEach(element => {
      
      const book = document.createElement('div')
      const text = document.createElement('p')
      const status = document.createElement('p')
      let checkBox = document.querySelector('input[type=checkbox]') //checkbox 
    
    const readStatus = () => {if(checkBox.checked === true){
      return 'Read'
    } else {
      return 'Not read'
    }
  }
   status.textContent = readStatus()

      text.classList.add('title')
        book.classList.add('book')
        book.appendChild(text)
        book.appendChild(status)
        text.textContent = element
        shelf.appendChild(book)

        const deleteBtn = document.createElement('button');
        deleteBtn.setAttribute('id', 'delete-btn')
        deleteBtn.innerText = 'x'
        deleteBtn.addEventListener('click', function(e) {
          book.parentNode.removeChild(book)
        })
        book.appendChild(deleteBtn)       
    }); 
  }

   btn.addEventListener('click', (e) => {
      document.getElementById('formElement').style.display ='flex'
        
    })
  
   const submitBtn = document.getElementById('submitBtn')

   submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const bookTitle = document.getElementById('bookTitle')
    const bookAuthor = document.getElementById('bookAuthor')
    const book = new Book(bookTitle.value, bookAuthor.value)
    myLibrary.push(book)
    loopThroughLibrary(myLibrary)
    myLibrary = []
    bookTitle.value = ''
    bookAuthor.value = ''

    document.getElementById('formElement').style.display ='none'
   })
 