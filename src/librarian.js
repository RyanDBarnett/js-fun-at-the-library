class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
  }

  greetPatron(patron, isMorning) {
    return isMorning ? `Good morning, ${patron}!` : `Hello, ${patron}!`;
  }
}

module.exports = Librarian;
