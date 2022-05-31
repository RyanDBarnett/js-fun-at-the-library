var {
  checkoutBook
} = require('../src/library.js')

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
        if (book.title == title) {
          checkoutBook(this.library, title, book.genre);
          return true;
        }
      });
    });

    return foundBook ? `Yes, we have ${title}` : `Sorry, we do not have ${title}`;
  }

  calculateLateFee(daysLate) {
    return Math.ceil(0.25 * daysLate);
  }
}

module.exports = Librarian;
