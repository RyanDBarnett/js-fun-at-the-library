class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
  }

  greetPatron(patron, isMorning) {
    return isMorning ? `Good morning, ${patron}!` : `Hello, ${patron}!`;
  }

  findBook(title) {
    var foundBook = Object.keys(this.library.shelves).find((shelf) => {
      return this.library.shelves[shelf].find((book) => {
        return book.title == title;
      });
    });

    return foundBook ? `Yes, we have ${title}` : `Sorry, we do not have ${title}`;
  }
}

module.exports = Librarian;
