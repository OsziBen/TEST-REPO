const myLibrary = [
    {
        title: "Book1",
        author: "Author1",
        numOfPages: 96,
        readItBefore: false
    },
    {
        title: "Book2",
        author: "Author2",
        numOfPages: 196,
        readItBefore: true  
    },
    {
        title: "Book3",
        author: "Author3",
        numOfPages: 916,
        readItBefore: true
    },
    {
        title: "Book4",
        author: "Author4",
        numOfPages: 961,
        readItBefore: true
    }
];

// book object
function Book(title, author, numOfPages, readItBefore) {
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    this.readItBefore = readItBefore;
}

// window onload
window.onload = function() {
    updateBooksGrid();
}


//
// --- GET HTML ELEMENT ---
//
// get modal element
const modal = document.getElementById("add-new-book-overlay");

// get close modal element
const closeModalBtn = document.getElementById("close-modal");

// get open modal button
const openModalBtn = document.getElementById("add-new-book-btn");

// get form element
const form = document.querySelector("#add-new-book-form");

// get books grid element
const booksGrid = document.querySelector(".content");

// get error message element
const errorMessage = document.querySelector("#error-message");
console.log(errorMessage);


//
// --- MODAL FUNCTIONALITIES ---
//
// open new book modal functionality for '+ ADD BOOK' button
openModalBtn.addEventListener("click", () => {
    toggleModal(modal);
});
 
// close modal window functionality for 'X' marker
closeModalBtn.addEventListener("click", () => {
    toggleModal(modal);
    resetForm(form);
});
 
// close modal window functionality for clicking outside of the modal window
window.addEventListener("click", (event) => {
    if(event.target == modal){
        toggleModal(modal);
        resetForm(form);
    }
});
    
// close modal functionality
function toggleModal(modal){
    modal.classList.toggle("active");
}
    
// reset form
function resetForm(form){
    form.reset();
}
    
// submit form functionality
form.addEventListener("submit", (event) => {
    event.preventDefault();
    let newBook = getData(event.target);       
    if(isNewBookInLibrary(newBook)){
        errorMessage.classList.toggle("active");
        errorMessage.textContent = "This book already exists in the library!"
        //resetForm(form);
    } else {
        errorMessage.classList.toggle("active");
        errorMessage.textContent = ""
        toggleModal(modal);
        resetForm(form);
        addBookToLibrary(newBook);
        updateBooksGrid();
    }
});


//
// --- LIBRARY ARRAY FUNCTIONALITIES ---
//
// get form data
function getData(form){
    const formData = new FormData(form);
    let title = "Unknown";
    let author = "Unknown";
    let pages = 0;
    
    for(let pair of formData.entries()){
        /*console.log(pair[0] + ": " + pair[1]);*/
        switch(pair[0]){
            case "title" :
                title = pair[1];
                break;
            case "author" :
                author = pair[1];
                break;
            case "pages" :
                pages = pair[1];
                break;
            default :
                break;
        }
    }
                 
    return new Book(title, author, pages, formData.has("read-it-before"));
}

// add new book to library functionality
function addBookToLibrary(newBook) {
    if(!isNewBookInLibrary(newBook)){
        myLibrary.push(newBook);
    }    
}
    
// check if new book already exists in library
function isNewBookInLibrary(newBook){
    return myLibrary.some((book) => book.title === newBook.title);
}
            
// get index of given element
function getIndexOfBook(title){
    let i = 0;
    while (myLibrary[i].title !== title) {
        i++;
    }
    
    return i;
    /*
    let index;
    myLibrary.forEach(element => {
        if(element.title === title){
            index = (myLibrary.indexOf(element));
        }
    });
    return index;
    */
}

// get title value of book element
function getTitleValue(bookElement){
    return bookElement.querySelector(".book-text-content .title p").textContent;
}
            
// remove book from list functionality
function removeBookFromList(book){
    myLibrary.splice(getIndexOfBook(getTitleValue(book)), 1);
    updateBooksGrid();
}

// change book status in list functionality
function changeBookStatusInList(gridElement){
    let book = myLibrary[getIndexOfBook(getTitleValue(gridElement))];
    book.readItBefore = !book.readItBefore;
}    


//
// --- GRID FUNCTIONALITIES
//
// update books grid functionality
function updateBooksGrid(){
    // grid tartalom törlése
    document.querySelectorAll(".book").forEach((e) => e.parentNode.removeChild(e));
    // foreach új elemek array alapján
    
    myLibrary.forEach(element => {
        booksGrid.appendChild(createNewBookElement(element))
    });
}


//
// --- CREATE NEW GRID ELEMENT ---
//
// create new book element for books grid
function createNewBookElement(bookData){
    
// create new book element for grid
const newGridElement = document.createElement("div");
newGridElement.classList.add("book");
    
// create book-text-content for new book element
const bookTextContent = document.createElement("div");
bookTextContent.classList.add("book-text-content");

// -- TITLE --
// create title element
const titleElement = document.createElement("div");
titleElement.classList.add("title");

// create title content
const titleContent = document.createElement("p");
titleContent.textContent = bookData.title;
// append title content to title element
titleElement.appendChild(titleContent);

// append title element to book-text-content
bookTextContent.appendChild(titleElement);

// -- AUTHOR --
// create author element
const authorElement = document.createElement("div");
authorElement.classList.add("author");

// create author content
const authorContent = document.createElement("p");
authorContent.textContent = bookData.author;
// append author content to author element
authorElement.appendChild(authorContent);

// append author element to book-text-content
bookTextContent.appendChild(authorElement);

// -- PAGES --
// create pages element
const pagesElement = document.createElement("div");
pagesElement.classList.add("pages");

// create pages content
const pagesContent = document.createElement("p");

pagesContent.textContent = bookData.numOfPages + " pages";
// append pages content to pages element
pagesElement.appendChild(pagesContent);

// append pages element to book-text-content
bookTextContent.appendChild(pagesElement);

// append book-text-content to new grid element
newGridElement.appendChild(bookTextContent);

// -- READ-IT-BEFORE BTN --
// create rib btn
const readItBeforeBtn = document.createElement("button");
readItBeforeBtn.setAttribute("type", "button");
readItBeforeBtn.classList.add("read-it-before-btn");
// set rib btn initial value
if(bookData.readItBefore){
    readItBeforeBtn.textContent = "READ IT BEFORE"
} else {
    readItBeforeBtn.classList.add("not-read");
    readItBeforeBtn.textContent = "NOT READ";
}
// add eventListener for rib btn
readItBeforeBtn.addEventListener("click", (event) => {
    changeBookStatusInList(event.target.parentNode);
    if(readItBeforeBtn.classList.contains("not-read")){
        readItBeforeBtn.textContent = "READ IT BEFORE";
    } else {
        readItBeforeBtn.textContent = "NOT READ";
    }
    readItBeforeBtn.classList.toggle("not-read");
});

// append rib btn to new grid element
newGridElement.appendChild(readItBeforeBtn);

// -- REMOVE BOOK BTN
// create remove book btn
const removeBookBtn = document.createElement("button");
removeBookBtn.setAttribute("type", "button");
removeBookBtn.classList.add("remove-book-btn");
removeBookBtn.textContent = "REMOVE";
// add event listener to remove book btn
removeBookBtn.addEventListener("click", (event) => {
    removeBookFromList(event.target.parentNode);
});

// append remove book btn to new grid element
newGridElement.appendChild(removeBookBtn);

return newGridElement;
}

