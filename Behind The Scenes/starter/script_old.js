'use strict';

// function calcAge(birthYear) {
//     const age = 2037 - birthYear;

//     function printAge() {
//         console.log(`You are ${firstName}, born in ${birthYear}`);
//     }

//     if(birthYear >= 1981 && birthYear <= 1996) {
//         const firstName = 'Taavish'
//         var str = `${firstName} You are a millenial!`;
//     }
//     console.log(str)
//     printAge();
//     return age;
// }

// const firstName = 'Jonas';
// const age = calcAge(1991);
// console.log(age)

// console.log(me);

// var me = 'Jonas';
// let job = 'teacher';
// const year = 1991;


// console.log(addDecl(2,3));
// // console.log(addExpr(2,3));
// // console.log(addArrow(2,3));

// //Functions
// function addDecl(a, b) {
//     return a+b;
// }

// const addExpr = function(a, b) {
//     return a + b;
// }

// var addArrow = (a, b) => a + b;

// //Example
// if(!numProducts) {
//     deleteShoppingCart();
// }
// var numProducts = 10;
// function deleteShoppingCart() {
//     console.log('All products deleted!');
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

// console.log(this);

// const calcAge = function (birthYear) {
//     console.log(2037-birthYear);
//     console.log(this);
// }

// calcAge(1991);

// const calcAgeArrow = (birthYear) => {
//     console.log(this);
//     return 2037 - birthYear;
// }

// console.log(calcAgeArrow(1991))

// const jonas = {
//     firstName : 'Jonas',
//     calcAge : function () {
//         console.log(this)
//     }
// }

// jonas.calcAge();

// const matilda = {
//     firstName : 'matilda',
//     year : 2017
// };

// matilda.calcAge = jonas.calcAge;
// console.log(matilda.calcAge(2017));

// const f = jonas.calcAge;
// f(1997); //Undefined because function is being invoked in isolation.


var firstName = 'Matilda';

const jonas = {
    firstName : 'Jonas',
    year : 1991,
    calcAge : function() {
        console.log(this);
        console.log(2037 - this.year);
        const self = this; //For regular function definition this will give the value undefined.
        // const isMillenial = function() {
        //     console.log(self);
        //     console.log(self.year >= 1981 && self.year <= 1996)
        // };

        const isMillenial = () => {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996)
        }

        isMillenial();
    },
    greet : () => {
        console.log(`Hey ${this.firstName}`)
    }
}

jonas.greet();
jonas.calcAge();

const addExpr = function(a, b) {
    console.log(arguments);
    return a + b;
}

addExpr(5, 2);

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
    name : 'Jonas',
    age : 30
}

const friend = me;
friend.age = 27;
console.log('Friend ', friend);
console.log('Me ', me);

const arr = [1,2,3,4];
const arr2 = arr;
arr2.pop();

console.log(arr);
console.log(arr2)

//Copying objects
const jessica = {
    firstName : 'Jessica',
    lastName : 'Williams',
    age : 27,
    family : ['Alice', 'Bob']
}

const jessicaCopy = Object.assign({}, jessica);
jessicaCopy.lastName = 'Davis';
jessicaCopy.family.push('David');
jessicaCopy.family.push('Mary');
console.log(jessica);
console.log(jessicaCopy);