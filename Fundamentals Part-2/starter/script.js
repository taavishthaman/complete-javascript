'use strict';

// function logger() {
//     console.log('My name is Jonas.');
// }

// //calling, running or invoking the function.
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// console.log(fruitProcessor(5, 0));

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

//Function declaration
// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// //Function expression (Expression produce values which is then stored in a variable)
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);
// const age2 = calcAge2(1991);

// console.log(age1, age2);

// //Arrow Function
// const calcAge3 = birthYear => 2037 - birthYear; 

// console.log(calcAge3(1991));

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2023 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years.`
// }

// console.log(yearsUntilRetirement(1997, 'Taavish'));

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3))

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const years = new Array(1991, 1993, 1995, 1997, 2010, 2015);
// console.log(years);

// console.log(friends[1]);
// console.log(friends.length);
// console.log(friends[friends.length-1]);

// const firstName = 'Jonas';
// //const jonas = [firstName, 'Schmedtmann', 2037-1991, 'teacher', friends];
// //console.log(jonas);

// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// friends.push('Jay');

// console.log(friends);

// const jonas = {
//     firstName : 'Jonas',
//     lastName : 'Schmedtmann',
//     age : 2037 - 1997,
//     job : 'Engineer',
//     friends : ['Michael', 'George', 'Saladin']
// };

// console.log(jonas);
// console.log(jonas.lastName);
// console.log(jonas['lastName']);

// const nameKey = 'Name';
// console.log(jonas['first'+nameKey],jonas['last'+nameKey]);

// // const request = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job or friends');

// // if(jonas[request]) {
// //     console.log(jonas[request]);
// // } else {
// //     console.log('Invalid Request! Choose between firstName, lastName, age, job or friends')
// // }

// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschmedtmann';
// console.log(jonas);
// console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friend is called ${jonas.friends[0]}.`)

const jonas = {
    firstName : 'Jonas',
    lastName : 'Schmedtmann',
    birthYear : 1997,
    job : 'Engineer',
    friends : ['Michael', 'George', 'Saladin'],
    hasDriverLicense : false,
    // calcAge : function() {
    //     console.log(this)
    //     return 2037 - this.birthYear;
    // }
    calcAge : function() {
        //Calculate and store it
        this.age = 2037-this.birthYear;
        return this.age;
    },
    getSummary : function() {
        return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he ${this.hasDriverLicense ? 'has' : 'does not have'} a driver's license.`
    }
};

//jonas object is calling calcAge, therefore jonas object is this.
// console.log(jonas.calcAge())
// console.log(jonas['calcAge'](1991))
console.log(jonas.age)
console.log(jonas.getSummary());

for(let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repitition ${rep} 🏋️‍♀️`)
}

const years = [1991, 2007, 1969, 2020];
const ages = []

for(let i=0; i<years.length; i++) {
    ages.push(2037-years[i]);
}

console.log(ages);

for(let exercise = 1; exercise <= 3; exercise++) {
    console.log(`---------- Starting exercise ${exercise} ___________`);

    for(let rep=1; rep <= 5; rep++) {
        console.log(`Exercise ${exercise} : Lifting weight repitition ${rep} 🏋🏻`);
    }
}

let rep = 1;

while(rep <= 10) {
    console.log(`WHILE : Lifting weight repitition ${rep} 🏋️‍♀️`);
    rep++;
}

//Simulating rolling a dice
let dice = Math.trunc(Math.random() * 6) + 1;

while(dice !== 6) {
    console.log(`You rolled a ${dice} !`);
    dice = Math.trunc(Math.random() * 6) + 1;
}
console.log(`You rolled a ${dice} !`);

//Assignment
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
}

const indiaData = describeCountry('India', 1025, 'Delhi');
const israelData = describeCountry('Israel', 9.73, 'Jerusalem');
const germanyData = describeCountry('Germany', 84.4, 'Berlin')
console.log(indiaData);
console.log(israelData);
console.log(germanyData);

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const percentageOfWorld2 = function(population) {
    return (population / 7900) * 100;
}

const indiaPercentage = percentageOfWorld1(1406);
const chinaPercentage = percentageOfWorld1(1411);
const usaPercentage = percentageOfWorld1(333);

console.log(indiaPercentage, chinaPercentage, usaPercentage);

const indiaPercentage2 = percentageOfWorld2(1406);
const chinaPercentage2 = percentageOfWorld2(1411);
const usaPercentage2 = percentageOfWorld2(333);

console.log(indiaPercentage2, chinaPercentage2, usaPercentage2);

const percentageOfWorld3 = population => (population / 7900) * 100;

console.log(percentageOfWorld3(1000));

const describePopulation = (country, population) => {
    const percentage = percentageOfWorld1(population);
    return `${country} has ${population} million people, which is about ${percentage}% of the world.`;
};

const describeIndia = describePopulation('India', 1406);
const describeChina = describePopulation('China', 1411);
const describeUsa = describePopulation('USA', 333);
console.log(describeIndia);
console.log(describeChina);
console.log(describeUsa);

const populations = [1406, 1411, 333, 10];

console.log(populations.length === 4);

const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), 
percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];

console.log(populations);
console.log(percentages);

const neighbors = ['China', 'Sri Lanka', 'Nepal'];
console.log(neighbors);
neighbors.push('Utopia');
console.log(neighbors);
neighbors.pop();
console.log(neighbors);

if(!neighbors.includes('Germany')) {
    console.log('Probably not a central european country.')
}

const index = neighbors.indexOf('Sri Lanka');
neighbors[index] = 'Republic of Sri Lanka';
console.log(neighbors);

const myCountry = {
    country : 'India',
    capital : 'Delhi',
    language : 'Hindi',
    population : 1406,
    neighbors : ['Sri Lanka', 'China', 'Nepal'],
    describe : function() {
        return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbors.length} neighboring countries and a capital called ${this.capital}`
    },
    checkIsland : function() {
        this.isIsland = this.neighbors.length > 0 ? false : true;
        return this.isIsland;
    }
};
myCountry.population += 2;
myCountry['population'] -= 1;
// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, 
// ${myCountry.neighbors.length} neighboring countries and a capital called ${myCountry.capital}.`)

console.log(myCountry.describe())

console.log(myCountry.checkIsland())

// for(let i=1; i<=50; i++) {
//     console.log(`Voter number ${i} is currently voting`);
// }

const percentage2 = [];

for(let i=0; i<populations.length; i++) {
    percentage2.push(percentageOfWorld1(populations[i]));
}

console.log(percentage2);

const listOfNeighbors = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

for(let i=0; i<listOfNeighbors.length; i++) {
    for(let j=0; j<listOfNeighbors[i].length; j++) {
        console.log("Neighbor:",listOfNeighbors[i][j]);
    }
}