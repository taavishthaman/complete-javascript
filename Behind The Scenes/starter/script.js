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

console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAge(1997);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAgeArrow(1997);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const taavish = {
  birthYear: 1997,
  data: {
    age: 26,
    calcAge: function () {
      console.log(this);
    },
  },
};

taavish.data.calcAge();
