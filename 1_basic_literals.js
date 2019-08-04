// // primitive
// const s1 = 'Hello';
// console.log(typeof s1);

// // Object
// const s2 = new String('Hello');
// console.log(typeof s2);

// // wrapped by Object
// console.log(s1.toUpperCase());
// console.log(s2.toUpperCase());

// // the window that contains this code (parent of everything)
// console.log(window);

// window.alert();
// // because there's no other object having the method
// // "alert" in here, it will be the same as
// alert();

const book1 = {
  title: "Book One",
  author: "John Doe",
  year: "2013",
  getSummary: function() {
    // ES6 backticks (template literals)
    return `${this.title} was written by ${this.author} in ${this.year}.`;
  }
};

const book2 = {
  title: "Book Two",
  author: "Johnny",
  year: "2016",
  getSummary: function() {
    // ES6 backticks (template literals)
    return `${this.title} was written by ${this.author} in ${this.year}.`;
  }
};

console.log(book1.getSummary());
console.log(book2.getSummary());

// Get the keys & values of an Object
console.log(Object.keys(book1));
console.log(Object.values(book1));
