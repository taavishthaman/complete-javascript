'use strict';

// const Person = function(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;

//     //Don't do this because this is inefficient
//     // this.calcAge = function() {
//     //     console.log(2037 - this.birthYear);
//     // }
// }

// const jonas = new Person('Jonas', 1991);
// console.log(jonas);

// console.log(jonas instanceof Person);

// //Following things happen when a function is called with a new keyword(constructor function)
// //1. An empty {} object is created.
// //2. {} is assigned to this.
// //3. {} is linked to the prototype __proto__ property is created and linked to Prototype property of constructor function
// //4. function returns {} or this after execution is completed

// //Prototypes
// Person.prototype.calcAge = function() {
//     console.log(2037 - this.birthYear);
// }

// //static method
// Person.hey = function() {
//     console.log('Hey There!');
// }

// Person.hey()

// jonas.calcAge();
// console.log(jonas.__proto__);
// console.log(Person.prototype);
// console.log(jonas.__proto__ === Person.prototype);
// console.log(Person.prototype.isPrototypeOf(jonas));
// Person.prototype.species = 'Homo Sapiens';
// console.log(jonas.species);
// console.log(jonas.hasOwnProperty('firstName'));
// console.log(jonas.__proto__.hasOwnProperty('species'));

// console.log(jonas);

// //Person prototype
// console.log(jonas.__proto__);
// //Object prototype
// console.log(jonas.__proto__.__proto__);
// //null
// console.log(jonas.__proto__.__proto__.__proto__);


// ///////////////////////////////////////
// // Coding Challenge #1

// /* 
// 1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
// 2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
// 4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

// DATA CAR 1: 'BMW' going at 120 km/h
// DATA CAR 2: 'Mercedes' going at 95 km/h

// GOOD LUCK 😀
// */


// const Car = function(make, speed) {
//     this.make = make;
//     this.speed = speed;
// };

// Car.prototype.accelerate = function() {
//     this.speed += 10;
//     console.log(`Accelerating : ${this.make} has a speed of ${this.speed}`);
// }

// Car.prototype.brake = function() {
//     this.speed -= 5;
//     console.log(`Braking : ${this.make} has a speed of ${this.speed}`);
// }

// const car1 = new Car('BMW', 120);
// const car2 = new Car('Mercedes', 95);

// console.log(car1.accelerate());
// console.log(car1.accelerate());
// console.log(car2.accelerate());
// console.log(car2.brake());
// console.log(car1.brake());

// //ES6 classes
// class PersonCl {
//     constructor(firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     }

//     //Method will be added to .prototype of the Person class
//     calcAge() {
//         console.log(2037 - this.birthYear);
//     }

//     get age() {
//         return 2037 - this.birthYear;
//     }

//     //Set a property that already exists
//     set fullName(name) {
//         console.log(name);
//         if(name.includes(" ")) {
//             this._fullName = name;
//         } else {
//             alert('The given name is not a full name!')
//         }
//     }

//     get fullName() {
//         return this._fullName;
//     }

//     static hey() {
//         console.log('Hey There!👋🏻');
//     }
// }

// const jessica = new PersonCl('Jessica Davis', 1996);
// console.log(jessica);
// jessica.calcAge();
// console.log(jessica.age);
// PersonCl.hey();

// console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function() {
//     console.log(`Hey ${this.firstName}`);
// }

// jessica.greet();

// const walter = new PersonCl('Walter', 1965);
// walter.fullName = 'Walter White'

// const account = {
//     owner : 'Jonas',
//     movements : [200, 530, 120, 300],
//     get latest() {
//         return this.movements.slice(-1).pop();
//     },
//     set latest(mov) {
//         this.movements.push(mov);
//     }
// };

// console.log(account.latest);
// account.latest = 50
// console.log(account.movements);

// const PersonProto = {
//     calcAge() {
//         console.log(2037 - this.birthYear);
//     },
//     init(firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     }
// };

// const steven = Object.create(PersonProto);
// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge()

// console.log(steven.__proto__ === PersonProto);

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1979)
// sarah.calcAge()

// ///////////////////////////////////////
// // Coding Challenge #2

// /* 
// 1. Re-create challenge 1, but this time using an ES6 class;
// 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
// 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
// 4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

// DATA CAR 1: 'Ford' going at 120 km/h

// GOOD LUCK 😀
// */

// class CarCl {
//     constructor(make, speed) {
//         this.make = make;
//         this.speed = speed;
//     }

//     accelerate() {
//         this.speed += 10;
//         console.log(`Accelerating : ${this.make} has a speed of ${this.speed}`);
//     }

//     brake() {
//         this.speed -= 5;
//         console.log(`Braking : ${this.make} has a speed of ${this.speed}`);
//     }

//     get speedUS() {
//         return this.speed / 1.6;
//     }

//     set speedUS(speed) {
//         this.speed = speed * 1.6;
//     }
// };

// const ford = new CarCl('Ford', 120);
// ford.accelerate()
// ford.speedUS = 70;
// ford.accelerate()
// console.log(ford.speedUS);
// ford.brake()

// const Person = function(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
// }

// Person.prototype.calcAge = function() {
//     console.log(2037 - this.birthYear);
// }

// const Student = function(firstName, birthYear, course) {
//     Person.call(this, firstName, birthYear); //this keyword of this function become this keyword of Person function
//     this.course = course;
// }

// //Linking the prototype chain, student will inherit all methods in the person's prototype
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function() {
//     console.log(`Hi, my name is ${this.firstName} and I am studying ${this.course}`);
// }

// const mike = new Student('Mike', 2001, 'Computer Science');
// mike.introduce();
// mike.calcAge();

// console.log(mike.__proto__ === Student.prototype);
// console.log(mike.__proto__);

// Student.prototype.constructor = Student;

///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

// const Car = function(make, speed) {
//     this.make = make;
//     this.speed = speed;
// };

// Car.prototype.accelerate = function() {
//     this.speed += 10;
// }

// Car.prototype.brake = function() {
//     this.speed -= 5;
//     console.log(`Braking : ${this.make} is going at speed ${this.speed}Km/h`);
// }

// const EV = function(make, speed, charge) {
//     Car.call(this, make, speed);
//     this.charge = charge;
// };

// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function(chargeTo) {
//     this.charge = chargeTo;
// };

// EV.prototype.accelerate = function() {
//     this.speed += 20;
//     this.charge -= 1;
//     console.log(`${this.make} going at ${this.speed}Km/h, with a charge of ${this.charge}%.`);
// };

// const tesla = new EV('Tesla', 120, 23);
// tesla.accelerate();
// tesla.brake();
// tesla.chargeBattery(90);
// tesla.accelerate();
// tesla.accelerate();


// class PersonCl {
//     constructor(firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     }

//     //Method will be added to .prototype of the Person class
//     calcAge() {
//         console.log(2037 - this.birthYear);
//     }

//     get age() {
//         return 2037 - this.birthYear;
//     }

//     //Set a property that already exists
//     set fullName(name) {
//         console.log(name);
//         if(name.includes(" ")) {
//             this._fullName = name;
//         } else {
//             alert('The given name is not a full name!')
//         }
//     }

//     get fullName() {
//         return this._fullName;
//     }

//     //Static Method
//     static hey() {
//         console.log('Hey There!👋🏻');
//     }
// }

// class StudentCl extends PersonCl {
//     constructor(firstName, birthYear, course) {
//         //Always needs to happen first
//         super(firstName, birthYear);
//         this.course = course;
//     }

//     introduce() {
//         console.log(`My name is ${this.firstName} and I study ${this.course}`);
//     }

//     calcAge() {
//         console.log(`I'm ${2037 - this.birthYear} years old, but as a student I feel more like ${2037 - this.birthYear + 5} years old.`);
//     }
// }

// const martha = new StudentCl('Martha Jones', 2012, 'Computer Science.');
// console.log(martha);
// martha.introduce();
// martha.calcAge();

// const PersonProto = {
//     calcAge() {
//         console.log(2037 - this.birthYear);
//     },

//     init(firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     }
// };

// const steven = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function(firstName, birthYear, course) {
//     PersonProto.init.call(this, firstName, birthYear);
//     this.course = course;
// }

// StudentProto.introduce = function() {
//     console.log(`My name is ${this.fullName} and I study ${this.course}`);
// }

// const jay = Object.create(StudentProto);
// jay.init('Jay', 2010, 'Computer Science');
// jay.introduce();
// jay.calcAge();


class Account{
    // 1) Public fields (instances)
    locale = navigator.language;
    _movements = [];

    //2) Private Fields
    #movements = [];
    #pin;

    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.#pin = pin;
        this._movements = [];
        this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${owner}`);
    }

    //Public Interface
    getMovements() {
        return this.#movements;
    }

    deposit(val) {
        this.#movements.push(val);
        return this;
    }

    withdraw(val) {
        this.deposit(-val);
        return this;
    }

    //Private method 
    #approveLoan(val) {
        return true;
    }

    requestLoan(val) {
        if(this.#approveLoan(val)) {
            this.deposit(val);
            console.log(`Loan for ${val} is approved!`);
            return this;
        }
    }


};

const acc1 = new Account('Jonas', 'EUR', 1111);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(500);
console.log(acc1);
console.log(acc1.getMovements());
// console.log(acc1.#approveLoan(20));
// console.log(acc1.#movements); //Will not be accessible
// console.log(acc1.#pin);

//CHAINING METHODS
acc1.deposit(300).withdraw(500).withdraw(35).requestLoan(25000).withdraw(4000); 
console.log(acc1);

///////////////////////////////////////
// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chaining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    brake() {
        this.speed -= 5;
        console.log(`Braking : ${this.make} is going at a speed ${this.speed}Km/h`);
        return this;
    }
}

class EVCl extends CarCl {
    #charge;
    constructor(make, speed, charge) {
        super(make, speed);
        this.#charge = charge;
    }

    accelerate() {
        this.speed += 20;
        this.#charge -= 1;
        console.log(`Accelerating : ${this.make} is now going at a speed ${this.speed}Km/h and the charge is ${this.#charge}%`);
        return this
    }

    chargeBattery(toCharge) {
        this.#charge = toCharge;
        return this;
    }
}

const tesla = new EVCl('Tesla', 120, 23);
tesla.accelerate();
tesla.brake();

tesla.chargeBattery(100).accelerate().accelerate().brake().accelerate();