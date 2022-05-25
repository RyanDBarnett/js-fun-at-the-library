function shelfBook(book, shelf) {
  if (shelf.length < 3) {
    shelf.unshift(book);
  }
}

function unshelfBook(bookName, shelf) {
  for (let i = 0; i < shelf.length; i++) {
    if (shelf[i].title == bookName) {
      shelf.splice(i, 1);
    }
  }
}

function listTitles() {

}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  // searchShelf
};
