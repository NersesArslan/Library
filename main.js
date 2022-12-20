
function Book(title, author) {
    this.title = title
    this.author = author
   }
   
   let myLibrary = [];

   const shelf = document.querySelector('.shelf')
   const btn = document.getElementById('btn')

   const loopThroughLibrary = (arr) => {   //function that loops through Library array
    (arr.map(book => book.title + " - " + book.author)).forEach(element => {
      console.log(element)
      const book = document.createElement('div')
      const text = document.createElement('p')
      text.classList.add('title')
        book.classList.add('book')
        book.appendChild(text)
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
      let title = prompt('Enter your book title: ')
      let author = prompt('Enter author\'s name: ')
      const book = new Book(title, author)
      myLibrary.push(book)
      loopThroughLibrary(myLibrary)
      myLibrary = []
    })
  
   
 