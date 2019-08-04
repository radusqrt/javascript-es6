const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// forEach -- synchronous
for (let i = 0; i < companies.length; ++i) {
  console.log(companies[i]);
}

// can take up to three params
// companies.forEach(function(company, index, array) {
companies.forEach(function(company) {
  console.log(company);
});

// filter
// let canDrink = [];
// for (let i = 0; i < ages.length; ++i) {
//   if (ages[i] >= 21) {
//     canDrink.push(ages[i]);
//   }
// }

// console.log(canDrink);

// can take up to three params
const canDrink = ages.filter(function(age) {
  if (age >= 21) {
    return true;
  }
});
console.log(canDrink);

// ES6
const canDrink_ES6 = ages.filter(age => age >= 21);
console.log(canDrink_ES6);

// ES5
const retailCompanies = companies.filter(function(company) {
  if (company.category == "Retail") {
    return true;
  }
});
console.log(retailCompanies);

// ES6
const retailCompanies_ES6 = companies.filter(
  company => company.category == "Retail"
);
console.log(retailCompanies_ES6);

// map

// ES6
const companyNames = companies.map(company => company.name);
console.log(companyNames);

const ageMap = ages.map(age => Math.sqrt(age)).map(age => age * 2);
console.log(ageMap);

// sort
// ES5
const sortedCompanies = companies.sort(function(c1, c2) {
  if (c1.start > c2.start) {
    return 1;
  } else {
    return -1;
  }
});
console.log(sortedCompanies);

// ES6
const sortedCompanies_ES6 = companies.sort((a, b) =>
  a.start > b.start ? 1 : -1
);
console.log(sortedCompanies_ES6);

// reduce
let ageSum = 0;
for (let i = 0; i < ages.length; ++i) {
  ageSum += ages[i];
}
console.log(ageSum);

// ES5
const ageSum_ES5 = ages.reduce(function(total, age) {
  return total + age;
}, 0);
console.log(ageSum_ES5);
// ES6
const ageSum_ES6 = ages.reduce((total, age) => total + age, 0);
console.log(ageSum_ES6);

// Get total years for all companies
// ES6
const totalYears = companies.reduce(
  (total, company) => total + (company.end - company.start),
  0
);
console.log(totalYears);

// Combine methods
const combined = ages
  .map(age => 2 * age)
  .filter(age => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0);

console.log(combined);
