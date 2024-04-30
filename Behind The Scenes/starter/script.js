'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     let output = `${firstName}, you are ${age}, born in ${birthYear}!`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1997) {
//       //Creating a new variable with outer scope variable's name in the block scope
//       const firstName = 'Steven';
//       const str = `Oh, you are a millenial, ${firstName}.`;
//       var millenial = true;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }

//       //Re-assigning outer scope's variable
//       output = 'NEW OUTPUT!';
//     }

//     //console.log(add(3, 7));

//     console.log(millenial);

//     console.log(output);
//   }

//   printAge();

//   return age;
// }

// const firstName = 'Taavish';
// calcAge(1997);

//Variables
//console.log(me);
// console.log(job); //TDZ for job variable, so cannot be accessed
// console.log(year); //TDZ for year variable, so cannot be accessed

// var me = 'Jonas';
// let job = 'Teacher';
// const year = 1991;

// //Functions
// console.log(addDecl(10, 20));
// // console.log(addExpr(10, 20));
// // console.log(addArrow(10, 20));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// // Example

// if (!numProducts) {
//   deleteShoppingCart();
// }

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All Products Deleted!');
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// calcAge(1997);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// calcAgeArrow(1997);

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };

// jonas.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

// const taavish = {
//   birthYear: 1997,
//   data: {
//     age: 26,
//     calcAge: function () {
//       console.log(this);
//     },
//   },
// };

// taavish.data.calcAge();

// var firstName = 'Matilda'; //Creates a property on the window object

// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);

//     //SOLUTION 1
//     // const self = this;
//     // const isMillenial = function () {
//     //   console.log(self);
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     // };

//     // isMillenial();

//     //SOLUTION 2
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };

//     isMillenial();
//   },
//   greet: () => console.log(`Hey ${this.firstName}`),
// };

// jonas.greet();
// jonas.calcAge();

// let age = 30;
// let oldAge = age;
// age = 31;

// console.log(age);
// console.log(oldAge);

// const me = {
//   name: 'Jonas',
//   age: 30,
// };

// const friend = me;
// friend.age = 27;

// console.log(me, friend);

let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';

console.log(lastName);
console.log(oldLastName);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

// const marriedJessica = jessica;

// marriedJessica.lastName = 'Davis';

// console.log(jessica);
// console.log(marriedJessica);

const marriedJessica = Object.assign({}, jessica);
//const marriedJessica = JSON.parse(JSON.stringify(jessica));

marriedJessica.lastName = 'Davis';
marriedJessica.family.push('Mary');
marriedJessica.family.push('John');
console.log(jessica);
console.log(marriedJessica);
