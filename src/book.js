function createTitle(title) {
  return `The ${title}`;
}

function buildMainCharacter(name, age, pronouns) {
  return {name, age, pronouns};
}

function saveReview(review, reviews) {
  if (reviews.indexOf(review) == -1) {
    reviews.push(review);
  }
}

function calculatePageCount(bookTitle) {
  return bookTitle.length * 20;
}

function writeBook(title, mainCharacter, genre) {
  return {
    title,
    mainCharacter,
    pageCount: calculatePageCount(title),
    genre
  };
}

function editBook(book) {
  book.pageCount = book.pageCount * .75;
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
