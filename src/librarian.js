class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
  }

  greetPatron(patron) {
    return `Hello, ${patron}!`;
  }
}

module.exports = Librarian;
