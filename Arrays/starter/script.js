'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


const displayMovements = function(movements, sort=false) {
  containerMovements.innerHTML = '';
  const movs = sort ? movements.slice().sort((a, b) => a-b) : movements;
  movs.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `<div class="movements__row">
      <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
      <div class="movements__value">${mov}€</div>
    </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
}
displayMovements(account1.movements);
//Calculate and print balance
const calcDisplayBalance = (acc) => {
  acc.balance = acc.movements.reduce((acc, mov) => acc+mov);
  labelBalance.textContent = `${acc.balance} €`;
}

const createUsernames = (accs) => {
  accs.forEach(acc => {
    acc.username = acc.owner.toLowerCase().split(' ').map(name => name[0]).join('');
  })
}


calcDisplayBalance(account1);

const calcDisplaySummary = function(acc) {
  const incomes = acc.movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`

  const interest = acc.movements.filter(mov => mov > 0).map(mov => mov * acc.interestRate).filter(mov => mov >= 1).reduce((acc, mov) => acc + mov);
  labelSumInterest.textContent = `${interest}€`;
}

// calcDisplaySummary(account1.movements);

// const user = 'Steven Thomas Williams';
// console.log(createUsernames(user));

createUsernames(accounts);

const updateUI = function(acc) {
  //Display Movements
  displayMovements(acc.movements);

  //Display Balance
  calcDisplayBalance(acc);

  //Display Summary
  calcDisplaySummary(acc);
}

//EVENT HANDLERS
let currentAccount;

btnLogin.addEventListener('click', (e) => {
  e.preventDefault();
  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
  if(currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display UI and a welcome message
    labelWelcome.textContent = `Welcome Back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;

    //Clear Input Fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    updateUI(currentAccount);
  }
})

btnTransfer.addEventListener('click', function(e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
  inputTransferAmount.value = inputTransferTo.value = '';
  if(amount > 0 && 
    receiverAcc &&
    currentAccount.balance >= amount && 
    receiverAcc?.username !== currentAccount.username) {
      currentAccount.movements.push(-amount);
      receiverAcc.movements.push(amount);
      updateUI(currentAccount);
  }
})

btnLoan.addEventListener('click', (e) => {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if(amount > 0 && currentAccount.movements.some(mov => mov > amount * 0.1)) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
})

//CLOSE AN ACCOUNT
btnClose.addEventListener('click', function(e) {
  e.preventDefault();
  if(inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin) {
    const index = accounts.findIndex(acc => acc.username === currentAccount.username);
    
    //DELETE ACCOUNT
    accounts.splice(index, 1);

    //HIDE UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
})

//SORT THE ENTRIES
let sorted = false;
btnSort.addEventListener('click', (e) => {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
})

//SORTING
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(owners);
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);
console.log(movements.sort());

//Return < 0 (a will be before b)
//Return > 0 (a will be after b)

//Switch order return > 0
//Keep order return < 0
// movements.sort((a, b) => {
//   if(a > b) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

// console.log(movements);

// movements.sort((a, b) => {
//   if(a > b) {
//     return -1;
//   } else {
//     return 1;
//   }
// });

movements.sort((a, b) => a-b);
console.log(movements);
movements.sort((a, b) => b-a);
console.log(movements);

//FLAT AND FLATMAPS
const arr = [[1,2,3], [4,5,6], 7,8];
console.log(arr.flat());

const arrDeep = [[[1,2],3], [4, [5,6]], 7, 8];
console.log(arrDeep.flat(1));
console.log(arrDeep.flat(2));

const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);

const allMovements = accountMovements.flat();
console.log(allMovements);

const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

//flat
// const overallBal = accounts.map(acc => acc.movements).flat().reduce((acc, mov) => acc + mov, 0);
// console.log(overallBal);

//flatmap
const overallBal = accounts.flatMap(acc => acc.movements).reduce((acc, mov) => acc + mov, 0);
console.log(overallBal);

// console.log(accounts);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements.includes(-130));

// const anyDeposits = movements.some(mov => mov > 1500);
// console.log(anyDeposits);
// console.log(movements.some(mov => mov === -130));

// //EVERY 
// console.log(movements.every(mov => mov > 0));
// console.log(account4.movements.every(mov => mov > 0));

// //Separate callback
// const deposit = mov => mov < 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

//Find Method
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(firstWithdrawal);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis')
// console.log(account);

// let accountForOf;

// for(let account of accounts) {
//   if(account.owner === 'Jessica Davis') {
//     accountForOf = account;
//     break;
//   }
// }

// console.log(accountForOf);
//Chaining Methods
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const eurToUsd = 1.1;
// //PIPELINE
// const totalDeposistUSD = movements.filter(mov => mov > 0).map((mov, i, arr) => {
//   console.log(arr);
//   mov * eurToUsd
// }).reduce((acc, mov) => acc + mov, 0);
// console.log(totalDeposistUSD);

// // Coding Challenge #3
// const calcAverageHumanAge = (ages) => {
//   const average = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4).
//   filter(age => age >= 18).
//   reduce((acc, age, i, arr) => acc + age / arr.length, 0)

//   console.log('Average ', average);
// };

// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const calcAverageHumanAge = (ages) => {
//   const adultDogs = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4).filter(age => age >= 18);
//   const totalAge = adultDogs.reduce((acc, age) => acc + age, 0)
//   return totalAge / adultDogs.length;
// };

// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

//FILTER METHOD
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const deposits = movements.filter(ele => ele > 0);
// console.log(deposits);

// const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);

// //REDUCE METHOD
// console.log(movements);
// const balance = movements.reduce(function(acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 100);

// console.log(balance);

// //Maximum Value
// const maxValue = movements.reduce((acc, mov) => {
//   if(acc > mov) {
//     return acc;
//   } else {
//     return mov;
//   }
// }, movements[0])

// console.log('Max Value ', maxValue);

// displayMovements(account1.movements);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurToUsd = 1.1;

// const movementsUsd = movements.map(mov => mov * eurToUsd);
// console.log(movements);
// console.log(movementsUsd);

// const movementsUSDFor = []
// for(const mov of movements) {
//   movementsUSDFor.push(mov * eurToUsd)
// }

// console.log(movementsUSDFor);

// const movDescriptions = movements.map((mov, i, _) => `Movement ${i+1} : You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`);

// console.log(movDescriptions);


// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/



// const checkDogs = function(dogsJulia, dogsKate) {
//   const dogsJuliaCopy = dogsJulia.slice(1, -2);
//   const dogsKateCopy = dogsKate.slice();
//   console.log(`Julia's Dogs`.padStart(20, '-').padEnd(30, '-'));
//   dogsJuliaCopy.forEach((age, i) => {
//     if(age >= 3) {
//       console.log(`Dog number ${i+1} is an adult, and is ${age} years old`);
//     } else {
//       console.log(`Dog number ${i+1} is still a puppy 🐶`);
//     }
//   })
//   console.log(`Kate's Dogs`.padStart(20, '-').padEnd(30, '-'));
//   dogsKateCopy.forEach((age, i) => {
//     if(age >= 3) {
//       console.log(`Dog number ${i+1} is an adult, and is ${age} years old`);
//     } else {
//       console.log(`Dog number ${i+1} is still a puppy 🐶`);
//     }
//   })
// }

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];

//SLICE
// console.log(arr.slice(2));
// console.log(arr.slice(2,4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice()); //Creates a shallow copy
// console.log([...arr]); //Creates a shallow copy

//SPLICE
// console.log(arr.splice(2)); //Returns everything from index 2 till end
// console.log(arr.splice(-1));
// console.log(arr); //All the remaining elements before index 2

//REVERSE
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// //JOIN
// console.log(letters.join(' - '));

//AT METHOD
// const arr = [23,11,64];
// console.log(arr[0]);
// console.log(arr.at(0));

// //Getting the last element
// console.log(arr[arr.length-1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));

// console.log('Jonas'.at(0));
// console.log('Jonas'.at(-1));

//FOR EACH METHOD

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// // for(let movement of movements) {
// //   if(movement > 0) {
// //     console.log(`You deposited ${movement}`);
// //   } else {
// //     console.log(`You withdrew ${Math.abs(movement)}`);
// //   }
// // }

// for(let [idx, movement] of movements.entries()) {
//   console.log(idx, movement);
// }

// movements.forEach(function(movement) {
//   if(movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// })

// movements.forEach(function(ele, idx, arr) {
//   console.log(idx, ele, arr);
// })

// currencies.forEach((ele, key) => console.log(key, ele))
//MAP
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function(value, key, map) {
//   console.log(`${key} : ${value}`);
// })

// //SET
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function(value, _, set) {
//   console.log(`${value} : ${value}`);
// })

const x = new Array(7);
// x.fill(10);
x.fill(1, 3, 5);
console.log(x);

//Array.from()
const y = Array.from({length : 7}, () => 1);
console.log(y);

const z = Array.from({length : 7}, (cur, i) => i+1);
console.log(z);

const diceRolls = Array.from({length : 100}, (ele, i) => Math.trunc(Math.random() * 6) + 1);
console.log(diceRolls);

labelBalance.addEventListener('click', () => {
  const movementsUI = Array.from(document.querySelectorAll('.movements__value'), el => Number(el.textContent.replace('€', '')));
  // console.log(movementsUI.map(el => el.textContent.replace('€', '')));
  console.log(movementsUI);
})

//Array Methods Practice
//1.
const bankDepositSum = accounts.flatMap(acc => acc.movements).filter(mov => mov > 0).reduce((sum, cur) => sum + cur, 0);
console.log(bankDepositSum);

//2.Count the number of deposits in the bank with atlease 1000 dollars
// const numDeposits1000 = accounts.flatMap(acc => acc.movements).filter(mov => mov >= 1000).length;
const numDeposits1000 = accounts.flatMap(acc => acc.movements).reduce((count, cur) => cur >= 1000 ? ++count : count, 0)
console.log(numDeposits1000);

//3. Create a new object
const {deposits, withdrawals} = accounts.flatMap(acc => acc.movements).reduce((sums, cur) => {
  // cur > 0 ? sums.deposits += cur : sums.withdrawals += cur;
  sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
  return sums;
}, {deposits : 0, withdrawals : 0})

console.log(deposits, withdrawals);

//4. 
//This is a nice title. -> This Is a Nice Title.

const convertTitleCase = function(title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);
  const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with'];
  const titleCase = title.toLowerCase().split(' ').map(word => exceptions.includes(word) ? word : capitalize(word)).join(' ');
  console.log(capitalize(titleCase));
}

convertTitleCase('this is a nice title.')
convertTitleCase('this is a LONG title but not too long.')
convertTitleCase('and here is another title with an EXAMPLE')


///////////////////////////////////////
// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/

//1.
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

dogs.forEach(dog => dog.recommendedFood = dog.weight ** 0.75 * 28);
console.log(dogs);

//2.
dogs.forEach(dog => {
  if(dog.owners.includes('Sarah')) {
    if(dog.curFood < 0.9 * dog.recommendedFood) {
      console.log("Sarah's dog is eating too little!");
    } else if(dog.curFood > 1.1 * dog.recommendedFood) {
      console.log("Sarah's dog is eating too much!");
    }
  }
});

//3.
const ownersEatTooMuch = dogs.flatMap(dog => {
  if(dog.curFood > 1.1 * dog.recommendedFood) {
    return dog.owners
  } else {
    return [];
  }
});

const ownersEatTooLittle = dogs.flatMap(dog => {
  if(dog.curFood < 0.9 * dog.recommendedFood) {
    return dog.owners
  } else {
    return [];
  }
});

console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);

//4.
let strTooMuch = '';
for(let [i, owner] of ownersEatTooMuch.entries()) {
  strTooMuch += owner;
  if(i < ownersEatTooMuch.length - 1)
    strTooMuch += ' and ';
}

console.log(`${strTooMuch}'s dogs eat too much!`);

let strTooLittle = '';
for(let [i, owner] of ownersEatTooLittle.entries()) {
  strTooLittle += owner;
  if(i < ownersEatTooLittle.length - 1)
    strTooLittle += ' and ';
}

console.log(`${strTooLittle}'s dogs eat too little!`);

//5.
console.log(dogs.some(dog => dog.recommendedFood === dog.curFood));

//6.
console.log(dogs.some(dog => dog.curFood >= 0.9 * dog.recommendedFood && dog.curFood <= 1.1 * dog.recommendedFood));

//7.
const okayDogs = dogs.filter(dog => dog.curFood > 0.9 * dog.recommendedFood && dog.curFood < 1.1 * dog.recommendedFood);
console.log(okayDogs);

//8.
const dogsCopy = dogs.slice();
dogsCopy.sort((dog1, dog2) => dog1.recommendedFood - dog2.recommendedFood);
console.log(dogsCopy);
console.log(dogs);