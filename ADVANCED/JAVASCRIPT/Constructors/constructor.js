function Book(title, author, numOfPages, readIt) {
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    this.readIt = readIt;

    this.info = function() {
        let info = "";

        info += this.title + " by " + this.author + ", " + this.numOfPages.toString() + " pages, ";
        
        this.readIt ? info += "read it" : info += "not read yet" ;
        
        return info;
    }
}


const book1 = new Book("Abc", "Def", 250, false);
console.log(book1.info());

/*
console.log(Object.getPrototypeOf(book1) === Book.prototype);
console.log(book1.valueOf());
console.log(book1.hasOwnProperty('valueOf'));
*/