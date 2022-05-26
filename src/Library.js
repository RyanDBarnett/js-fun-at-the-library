function createLibrary(name) {
  return {
    name,
    shelves: {}
  };
}

module.exports = {
  createLibrary,
  // addBook,
  // checkoutBook
};
