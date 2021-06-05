"use strict";

/////////////////////////////////////////////////
// Prototype

/* const Person = function (firstName, birthYear) {
	// Instance properties
	this.firstName = firstName;
	this.birthYear = birthYear;

	// Never do this
	// this.calcAge = function () {
	// 	console.log(2021 - this.birthYear);
	// };
};

const sol = new Person("Sol", 1994);
console.log(sol);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person("Matilda", 2000);
const jack = new Person("Jack", 1982);
console.log(matilda, jack);

const jay = "Jay";

console.log(sol instanceof Person); // true
console.log(jay instanceof Person); // false

Person.hey = function () {
	console.log("Hey there 👋");
	console.log(this);
};

Person.hey();
// sol.hey(); // Error

// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
	console.log(2021 - this.birthYear);
};

sol.calcAge();
matilda.calcAge();
jack.calcAge();

console.log(sol.__proto__ === Person.prototype); // true

console.log(Person.prototype.isPrototypeOf(sol)); // true
console.log(Person.prototype.isPrototypeOf(matilda)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false

// .prototypeOfLinkedObjects

Person.prototype.species = "Homo Sapiens";
console.log(sol.species, matilda.species);

console.log(sol.hasOwnProperty("firstName")); // true
console.log(sol.hasOwnProperty("species")); // false

console.log(sol.__proto__);
// Object.prototype (top of prototype chain)
console.log(sol.__proto__.__proto__);
console.log(sol.__proto__.__proto__.__proto__); // null

console.dir(Person.prototype.constructor);

const arr = [3, 5, 3, 1, 9, 1]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype); // true

console.log(arr.__proto__.__proto__);

// Don't do this in real job
Array.prototype.unique = function () {
	return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector("h1");
console.dir((x) => x + 1);
 */

// ---------------------------------------------------------

// Coding Challenge #1
// My solution

/* const Car = function (make, speed) {
	this.make = make;
	this.speed = speed;
};

Car.prototype.accelerate = function () {
	this.speed += 10;
	console.log(`${this.make} going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
	this.speed -= 5;
	console.log(`${this.make} going at ${this.speed} km/h`);
};

const BMW = new Car("BMW", 120);
const Mercedes = new Car("Mercedes", 95);

BMW.accelerate();
BMW.brake();
BMW.brake();
BMW.brake();
Mercedes.brake();
Mercedes.brake();
Mercedes.accelerate();
Mercedes.accelerate();
Mercedes.accelerate();
 */

// Answer
/* 
const Car = function (make, speed) {
	this.make = make;
	this.speed = speed;
};

Car.prototype.accelerate = function () {
	this.speed += 10;
	console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
	this.speed -= 5;
	console.log(`${this.make} is going at ${this.speed} km/h`);
};

const bmw = new Car("BMW", 120);
const mercedes = new Car("Mercedes", 90);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();
*/

// ---------------------------------------------------------

// ES6 Classes
/* 
// class expression
// const PersonCl = class {};

// class declaration
class PersonCl {
	constructor(fullName, birthYear) {
		this.fullName = fullName;
		this.birthYear = birthYear;
	}

	// Instance methods
	// Methods will be added to .prototype property
	calcAge() {
		console.log(2021 - this.birthYear);
	}

	greet() {
		console.log(`Hey ${this.firstName}`);
	}

	get age() {
		return 2021 - this.birthYear;
	}

	// Set a property that already exists
	set fullName(name) {
		console.log(name);
		if (name.includes(" ")) this._fullName = name;
		else alert(`${name} is not a full name!`);
	}

	get fullName() {
		return this._fullName;
	}

	// Static method
	static hey() {
		console.log("Hey there 👋");
		console.log(this);
	}
}

const jessica = new PersonCl("Jessica Davis", 1998);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
// 	console.log(`Hey ${this.firstName}`);
// };

jessica.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode

const walter = new PersonCl("Walter White", 1973);

PersonCl.hey();

const account = {
	owner: "sol",
	movements: [200, 530, 120, 300],

	get latest() {
		return this.movements.slice(-1).pop();
	},

	set latest(mov) {
		this.movements.push(mov);
	},
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);

// Object.create
const PersonProto = {
	calcAge() {
		console.log(2021 - this.birthYear);
	},

	init(firstName, birthYear) {
		this.firstName = firstName;
		this.birthYear = birthYear;
	},
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = "Steven";
steven.birthYear = 2004;
steven.calcAge();

console.log(steven.__proto__ === PersonProto); // true

const sarah = Object.create(PersonProto);
sarah.init("Sarah", 1968);
sarah.calcAge();
 */

// ---------------------------------------------------------

// Coding Challenge #2
// My solution
/* 
class CarCl {
	constructor(make, speed) {
		this.make = make;
		this.speed = speed;
	}

	accelerate() {
		this.speed += 10;
		console.log(`${this.make} is going at ${this.speed} km/h`);
	}

	brake() {
		this.speed -= 5;
		console.log(`${this.make} is going at ${this.speed} km/h`);
	}

	get speedUS() {
		return this.speed / 1.6;
	}

	set speedUS(speed) {
		this.speed = speed * 1.6;
	}
}

const ford = new CarCl("Ford", 120);
ford.accelerate();
ford.brake();
console.log(ford.speedUS);
ford.speedUS = 58.3;
console.log(ford.speed);
*/

// Answer
/* 
class CarCl {
	constructor(make, speed) {
		this.make = make;
		this.speed = speed;
	}

	accelerate() {
		this.speed += 10;
		console.log(`${this.make} is going at ${this.speed} km/h`);
	}

	brake() {
		this.speed -= 5;
		console.log(`${this.make} is going at ${this.speed} km/h`);
	}

	get speedUS() {
		return this.speed / 1.6;
	}

	set speedUS(speed) {
		this.speed = speed * 1.6;
	}
}

const ford = new CarCl("Ford", 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);

 */

// ---------------------------------------------------------

// Inheritance: Constructor Functions
/* 
const Person = function (firstName, birthYear) {
	this.firstName = firstName;
	this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
	console.log(2021 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
	Person.call(this, firstName, birthYear);
	this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
	console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student("Mike", 1999, "Computer Science");
console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student); // true
console.log(mike instanceof Person); // true
console.log(mike instanceof Object); // true

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
*/

// ---------------------------------------------------------

// Coding Callenge #3
// My solution
const Car = function (make, speed) {
	this.make = make;
	this.speed = speed;
};

Car.prototype.accelerate = function () {
	this.speed += 10;
	console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
	this.speed -= 5;
	console.log(`${this.make} is going at ${this.speed} km/h`);
};

/* 
const EV = function (make, speed, charge) {
	Car.call(this, make, speed);
	this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
	this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
	this.speed += 20;
	this.charge--;
	console.log(
		`${this.make} is going at ${this.speed}, with a charge of ${this.charge}%`
	);
};

const tesla = new EV("Tesla", 120, 23);
tesla.accelerate();
tesla.accelerate();
tesla.brake();
tesla.chargeBattery(90);
tesla.accelerate();
tesla.accelerate();
*/

// Answer
const EV = function (make, speed, charge) {
	Car.call(this, make, speed);
	this.charge = charge;
};

// Link to prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
	this.charge = chargeTo;
};

// Overriding
EV.prototype.accelerate = function () {
	this.speed += 20;
	this.charge--;
	console.log(
		`${this.make} is going at ${this.speed}, with a charge of ${this.charge}%`
	);
};

const tesla = new EV("Tesla", 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();

// ---------------------------------------------------------

// Inheritance: ES6 Classes
class PersonCl {
	constructor(fullName, birthYear) {
		this.fullName = fullName;
		this.birthYear = birthYear;
	}

	calcAge() {
		console.log(2021 - this.birthYear);
	}

	greet() {
		console.log(`Hey ${this.firstName}`);
	}

	get age() {
		return 2021 - this.birthYear;
	}

	set fullName(name) {
		console.log(name);
		if (name.includes(" ")) this._fullName = name;
		else alert(`${name} is not a full name!`);
	}

	get fullName() {
		return this._fullName;
	}

	static hey() {
		console.log("Hey there 👋");
		console.log(this);
	}
}

class Student extends PersonCl {
	constructor(fullName, birthYear, course) {
		// Always needs to happen first!
		super(fullName, birthYear);
		this.course = course;
	}

	introduce() {
		console.log(`My name is ${this.fullName} and I study ${this.course}`);
	}

	calcAge() {
		console.log(
			`I'm ${
				2021 - this.birthYear
			} years old, but as a student I feel more like ${
				2021 - this.birthYear + 10
			}..`
		);
	}
}

const martha = new Student("Martha Jones", 2000, "Computer Science");
martha.introduce();
martha.calcAge();

// ---------------------------------------------------------

// Inheritance: Object.create
const PersonProto = {
	calcAge() {
		console.log(2021 - this.birthYear);
	},

	init(firstName, birthYear) {
		this.firstName = firstName;
		this.birthYear = birthYear;
	},
};

const tom = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
	PersonProto.init.call(this, firstName, birthYear);
	this.course = course;
};

StudentProto.introduce = function () {
	console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const cathy = Object.create(StudentProto);
cathy.init("Cathy", 1993, "Computer Science");
cathy.introduce();
cathy.calcAge();

// ---------------------------------------------------------

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// (there is also the static version)

class Account {
	// 1) Public fields(instances)
	locale = navigator.language;

	// 2) Private fields
	#movements = [];
	#pin;

	constructor(owner, currency, pin) {
		this.owner = owner;
		this.currency = currency;
		// protected property
		this.#pin = pin;
		// this._movements = [];
		// this.locale = navigator.language;

		console.log(`Thanks for opening an account, ${owner}`);
	}

	// 3) Public methods

	// Public interface
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

	requestLoan(val) {
		// if (this.#approveLoan(val)) {
		if (this._approveLoan(val)) {
			this.deposit(val);
			console.log("Loan approved");
			return this;
		}
	}

	static helper() {
		console.log("Helper");
	}

	// 4) Private methods
	// #approveLoan(val) {
	_approveLoan(val) {
		return true;
	}
}

const acc1 = new Account("Sol", "WON", 1234);
console.log(acc1);

// acc1._movements.push(50000);
// acc1._movements.push(-3000);
acc1.deposit(20000);
acc1.withdraw(640);
acc1.requestLoan(10000);
// acc1.approveLoan(10000);
console.log(acc1.getMovements());
console.log(acc1);
console.log(acc1.pin);
Account.helper();

// console.log(acc1.#movements); // SyntaxError
// console.log(acc1.#pin); // SyntaxError
// console.log(acc1.#approveLoan(1000)); // SyntaxError

// Chaining
acc1
	.deposit(8500)
	.deposit(5000)
	.withdraw(5600)
	.requestLoan(40000)
	.withdraw(6200);
console.log(acc1.getMovements());

// ---------------------------------------------------------

// Coding Challenge #4

// My solution
class CarCl {
	constructor(make, speed) {
		this.make = make;
		this.speed = speed;
	}

	accelerate() {
		this.speed += 10;
		console.log(`${this.make} is going at ${this.speed} km/h`);
	}

	brake() {
		this.speed -= 5;
		console.log(`${this.make} is going at ${this.speed} km/h`);
		return this;
	}

	get speedUS() {
		return this.speed / 1.6;
	}

	set speedUS(speed) {
		this.speed = speed * 1.6;
	}
}

/* 
class EVCl extends CarCl {
	#charge;

	constructor(make, speed, charge) {
		super(make, speed);
		this.#charge = charge;
	}

	chargeBattery(chargeTo) {
		this.#charge = chargeTo;
		return this;
	}

	accelerate() {
		this.speed += 20;
		this.#charge--;
		console.log(
			`${this.make} is going at ${this.speed}, with a charge of ${
				this.#charge
			}%`
		);
		return this;
	}
}

const rivian = new EVCl("Rivian", 120, 23);
rivian.accelerate().chargeBattery(100).accelerate().brake();
*/

// Answer
class EVCl extends CarCl {
	#charge;

	constructor(make, speed, charge) {
		super(make, speed);
		this.#charge = charge;
	}

	chargeBattery(chargeTo) {
		this.#charge = chargeTo;
		return this;
	}

	accelerate() {
		this.speed += 20;
		this.#charge--;
		console.log(
			`${this.make} is going at ${this.speed}, with a charge of ${
				this.#charge
			}%`
		);
		return this;
	}
}

const rivian = new EVCl("Rivian", 120, 23);
console.log(rivian);
// console.log(rivian.#charge);
rivian
	.accelerate()
	.accelerate()
	.accelerate()
	.brake()
	.chargeBattery(50)
	.accelerate();

console.log(rivian.speedUS);
