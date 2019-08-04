// Assign variables from objects
var foo = { x: 3.6, y: 7.4, z: 6.54 };
var x1 = foo.x;
var y1 = foo.y;
var z1 = foo.z;
console.log(x1);

const { x, y, z } = foo;
console.log(x);

const { x: a, y: b, z: c } = foo;
console.log(b);

// Assign variables from nested objects
const nest = {
  start: { x: 5, y: 6 },
  end: { x: 6, y: -9 }
};
const {
  start: { x: startX, y: startY }
} = nest;
console.log(startX);

// Assign variables from arrays
const [q, r] = [1, 2, 3, 4, 5];
// 1 2
console.log(q, r);
const [q2, , , r2] = [1, 2, 3, 4, 5];
// 1 4
console.log(q2, r2);

// Rest operator to reassign array elements
const [q3, r3, ...rest] = [1, 2, 3, 4, 5];
console.log(q3, r3);
console.log(rest);

// Pass an object as a function's parameters
// const profileUpdate = profileData => {
//   const { name, age, nationality, location } = profileData;
//   // do something with these variables
// };
// becomes
const profileUpdate = ({ name, age, nationality, location }) => {
  // do something with these variables
};
