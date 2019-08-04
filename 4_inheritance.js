// Constructor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

// getSummary in the prototype
Book.prototype.getSummary = function() {
  return `${this.title} was written by ${this.author} in ${this.year}.`;
};

// Magazine Constructor
function Magazine(title, author, year, month) {
  // Call the Book constructor to initialize fields
  Book.call(this, title, author, year);
  this.month = month;
}

// Inherit Prototype
Magazine.prototype = Object.create(Book.prototype);

// Instantiate Magazine Object
const mag1 = new Magazine("Mag 1", "John Doe", "2018", "Jun");
// Uses Book constructor
console.log(mag1);
console.log(mag1.getSummary());

// Use Magazine constructor
Magazine.prototype.constructor = Magazine;
