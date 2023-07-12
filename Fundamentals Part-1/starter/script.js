// console.log(40+8+23-10);

// let firstName = "Jonas";
// console.log(firstName);

// let javascriptIsFun = true;
// javascriptIsFun = 'YES!';
// console.log(javascriptIsFun, typeof javascriptIsFun)

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(ageJonas, ageSarah);
// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// const lastName = 'Schemdtmann';
// console.log(firstName + ' ' + lastName);

// let x = 10 + 5; //15
// x += 10;
// console.log(x++)

// //Boolean operators
// console.log(ageJonas > ageSarah)

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log('Average Age ',averageAge);

// const firstName = 'Jonas';
// const job = 'Teacher';
// const birthYear = 1991;
// const year = 2037;

// // const jonas = "I'm "+firstName+', a '+(year - birthYear) + ' year old '+job+'!';

// const jonas = `I'm ${firstName}, a ${year-birthYear} year old ${job}!`;
// console.log(jonas);

// //Older way of creating strings with multiple lines
// console.log('String with \n\
// multiple \n\
// lines.');

// //Newer way of creating strings with multiple lines
// console.log(`String with
// multiple
// lines.`);

// const age = 15;

// if(age >= 18) {
//     console.log('Sarah can start driving license 🚗')
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young! Wait another ${yearsLeft} years.`);
// }

// const birthYear = 2012;
// let century;
// if(birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }

// console.log(century);

//Type Conversion
// const inputYear = '1991';
// console.log(Number(inputYear) + 18);

// //Type coercion
// console.log(1 + '5')

// const money = 100;
// if(money) {
//     console.log(`Don't spend it all ;)`);
// } else {
//     console.log(`You should get a job!`);
// }

// let height = 123;
// if(height) {
//     console.log('YAY! Height is defined');
// } else {
//     console.log('Height is undefined');
// }

// const age = '18';
// if(age === 18) {
//     console.log('You just became an adult! (strict)');
// }

// if(age == 18) {
//     console.log('You just became an adult! (loose)');
// }

// const favorite = Number(prompt(`What's your favourite number?`));
// console.log(favorite);
// if(favorite === 42) {
//     console.log('42 is the best number!');
// } else if(favorite === 7) {
//     console.log('7 is also a cool number!')
// } else {
//     console.log('Number is not 42 or 7.🤫')
// }

// if(favorite !== 42) {
//     console.log('Why not 42?');
// }

// const hasDriversLicense = true;
// const hasGoodVision = true;
// const isTired = false;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);

// if(hasDriversLicense && hasGoodVision && !isTired) {
//     console.log('Sarah is able to drive.');
// } else {
//     console.log('Someone else should drive!');
// }

const day = 'monday';

switch(day) {
    case 'monday':
        console.log('Plan my course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend');
        break;
    default:
        console.log('Not a valid day!');
}

if(day === 'monday') {
    console.log('Plan my course structure');
    console.log('Go to coding meetup');
}
else if(day === 'tuesday') {
    console.log('Prepare theory videos');
}
else if(day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
}
else if(day === 'friday') {
    console.log('Record videos');
}
else if(day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend');
}
else {
    console.log('Not a valid day!');
}

const age = 23;
age >= 18 ? console.log('I like to drink 🍷') : console.log('I like to drink water 💧');

const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log('Drink is', drink);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`)
//Assignment
const country = 'India';
const continent = 'Asia';
let population = 1_406;

const isIsland = false;
const language = 'hindi';

const halfPopulation = population / 2;
console.log(halfPopulation+' million');
population += 1;
console.log(population)
if(population > 6) {
    console.log(`${country} has more population than Finland.`)
}

const lesserThanGlobalAvg = population < 33;
console.log(lesserThanGlobalAvg);

console.log(`${country} is in ${continent}, and its ${population} million people speak ${language}.`)

if(population > 33) {
    console.log(`${country}'s population is above average.`);
} else {
    const average = (33 - population) / 2;
    console.log(`${country}'s population is ${average} million below average`);
}

//'9' - '5' = 4
console.log('9' - '5');
//'19' - '13' + '17' = '617'
console.log('19' - '13' + '17');
//'19' - '13' + 17 = 23
console.log('19' - '13' + 17);
//'123' < 57 = false
console.log('123' < 57);
//5 + 6 + '4' + 9 - 4 - 2 = 1143
console.log(5 + 6 + '4' + 9 - 4 - 2);

const numNeighbors = Number(prompt('How many neighbors does your country have?'));
if(numNeighbors === 1) {
    console.log('Only 1 border!');
} else if(numNeighbors > 1) {
    console.log('More than 1 border.');
} else {
    console.log('No borders')
}

if(language === 'english' && population < 50 && !isIsland) {
    console.log(`You should live in ${country} :)`);
} else {
    console.log(`${country} does not meet your criteria :(`);
}

switch(language) {
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D');
}

console.log(`${country}'s population is ${population > 33 ? 'above' : 'below'} average`);
//Assignment
