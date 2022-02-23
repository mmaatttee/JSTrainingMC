class Book {
  constructor(
    title,
    pages,
    binding,
    formatW,
    formatL,
    read,
    datePublished
  ) {
    this.title = title;
    this.pages = pages;
    this.binding = binding;
    this.pocketNum = pocketNum;
    this.format = {
      bwidth: formatW,
      blength: formatL,
    };
    this.read = read;
    this.datePublished = datePublished;
  }
  readYN(readstatus) {
    this.read = readstatus;
  }
  newFormat(formatW, formatL) {
    this.format.bwidth = formatW;
    this.format.blength = formatL;
  }
  bookAge() {
    let now = new Date();
    let datePublished = new Date(this.datePublished);
    let elapsed = now - datePublished; // elapsed time in milliseconds
    let daysSincePublished = Math.floor(elapsed / (1000 * 3600 * 24));
    return daysSincePublished;
  }
}

export default Book;
