// ============================================================
// 03 — Object-Oriented TypeScript Exercises
// ============================================================

// ============================================================
// Exercise 01 — Class and Object
// ============================================================

// Create a class called Product.

// Properties:
// - name: string
// - price: number

// Create a constructor to initialize both properties.

// Add a method:
// getInfo(): string

// It should return:
// "Product: Keyboard, Price: 100"
class Product {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  getInfo(): string {
    return `Product: ${this.name}, Price: ${this.price}`;
  }
}

const product1 = new Product("Keyboard", 100);

console.log(product1.getInfo());

// ============================================================
// Exercise 02 — Inheritance
// ============================================================

// Create a class called Person.

// Property:
// - name: string

// Method:
// - introduce(): void

// Create a class called Student that extends Person.

// Add:
// - studentId: number

// Add a method:
// - study(): void

// Create a Student object and call both inherited
// and child methods.
class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  introduce(): void {
    console.log(`Hello, my name is ${this.name}`);
  }
}

class Student extends Person {
  studentId: number;

  constructor(name: string, studentId: number) {
    super(name);
    this.studentId = studentId;
  }

  study(): void {
    console.log(`${this.name} is studying`);
  }
}

const studentObj = new Student("Allen", 121);

studentObj.introduce();
studentObj.study();

// ============================================================
// Exercise 03 — typeof Type Guard
// ============================================================

// Create a function called formatValue.

// Parameter:
// value: string | number

// If value is a string:
// return it in uppercase.

// If value is a number:
// return the number with 2 decimal places.
const formatValue = (value: string | number): string => {
  if (typeof value === "string") {
    return value.toUpperCase();
  }

  return value.toFixed(2);
};

console.log(formatValue("typescript"));
console.log(formatValue(25));

// ============================================================
// Exercise 04 — in Type Guard
// ============================================================

// Create two types:

// Admin:
// - name: string
// - permissions: string[]

// Customer:
// - name: string
// - purchaseCount: number

// Create a function called showUserInfo.

// Use the "in" operator to determine whether
// the user is an Admin or Customer.

// Display the appropriate information.
type Admin = {
  name: string;
  permissions: string[];
};

type Customer = {
  name: string;
  purchaseCount: number;
};

const showUserInfo = (user: Admin | Customer): void => {
  console.log(`Name: ${user.name}`);

  if ("permissions" in user) {
    console.log(`Permissions: ${user.permissions.join(", ")}`);
  } else {
    console.log(`Purchase Count: ${user.purchaseCount}`);
  }
};

showUserInfo({
  name: "Alice",
  permissions: ["create", "update", "delete"],
});

showUserInfo({
  name: "Bob",
  purchaseCount: 12,
});

// ============================================================
// Exercise 05 — instanceof Type Guard
// ============================================================

// Create two classes:

// EmailNotification
// - sendEmail(): void

// SMSNotification
// - sendSMS(): void

// Create a function called sendNotification.

// Parameter:
// EmailNotification | SMSNotification

// Use instanceof to determine which method to call.
class EmailNotification {
  sendEmail(): void {
    console.log("Sending email notification");
  }
}

class SMSNotification {
  sendSMS(): void {
    console.log("Sending SMS notification");
  }
}

const sendNotification = (
  notification: EmailNotification | SMSNotification,
): void => {
  if (notification instanceof EmailNotification) {
    notification.sendEmail();
  } else {
    notification.sendSMS();
  }
};

sendNotification(new EmailNotification());
sendNotification(new SMSNotification());
// ============================================================
// Exercise 06 — Access Modifiers
// ============================================================

// Create a class called Employee.

// Properties:
// - public id: number
// - protected department: string
// - private salary: number

// Create methods to:
// - display the id
// - display the department
// - safely increase the salary

// Create another class called Manager
// that extends Employee.

// Try accessing:
// - id
// - department
// - salary

// Observe which properties TypeScript allows.
class Employee {
  public id: number;
  protected department: string;
  private salary: number;

  constructor(id: number, department: string, salary: number) {
    this.id = id;
    this.department = department;
    this.salary = salary;
  }

  public showId(): void {
    console.log(`Employee ID: ${this.id}`);
  }

  protected showDepartment(): void {
    console.log(`Department: ${this.department}`);
  }

  public increaseSalary(amount: number): void {
    if (amount > 0) {
      this.salary += amount;
    }
  }

  public showSalary(): void {
    console.log(`Salary: ${this.salary}`);
  }
}

class Manager extends Employee {
  displayInformation(): void {
    this.showId(); // public: accessible
    this.showDepartment(); // protected: accessible

    // console.log(this.salary);
    // Error: salary is private in Employee.
  }
}

const manager = new Manager(101, "IT", 50000);

manager.displayInformation();
manager.increaseSalary(5000);
manager.showSalary();

/* ============================================================
   Exercise 07 — Encapsulation
   ============================================================ */

// Create a class called BankAccount.

// Create:
// private balance: number

// Add methods:
//
// deposit(amount: number)
// withdraw(amount: number)
// getBalance(): number

// Rules:
// - deposit amount must be greater than 0
// - withdrawal cannot exceed the current balance
// - balance must never be directly accessible outside
//   the class
class BankAccount {
  private balance: number;

  constructor(initialBalance: number = 0) {
    this.balance = initialBalance;
  }

  deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited: ${amount}`);
    } else {
      console.log("Deposit amount must be greater than 0");
    }
  }

  withdraw(amount: number): void {
    if (amount <= 0) {
      console.log("Withdrawal amount must be greater than 0");
      return;
    }

    if (amount > this.balance) {
      console.log("Insufficient balance");
      return;
    }

    this.balance -= amount;
    console.log(`Withdrawn: ${amount}`);
  }

  getBalance(): number {
    return this.balance;
  }
}

const bankAccount = new BankAccount(1000);

bankAccount.deposit(500);
bankAccount.withdraw(300);

console.log(`Current Balance: ${bankAccount.getBalance()}`);

// bankAccount.balance = 5000;
// Error: balance is private.

// ============================================================
// Exercise 08 — Getter and Setter
// ============================================================

// Create a class called UserProfile.

// Private property:
// _age: number

// Create:
// - getter age
// - setter age

// Setter rule:
// age cannot be negative.

// Test the getter and setter.
class UserProfile {
  private _age: number = 0;

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    if (value >= 0) {
      this._age = value;
    } else {
      console.log("Age cannot be negative");
    }
  }
}

const userProfile = new UserProfile();

userProfile.age = 32;

console.log(`User age: ${userProfile.age}`);

userProfile.age = -5;

console.log(`User age: ${userProfile.age}`);

// ============================================================
// Exercise 09 — Static
// ============================================================

// Create a class called EmployeeCounter.

// Create:
// static count: number

// Every time an Employee object is created,
// increase the static count.

// Create three Employee objects.

// Display the total number of employees using:
//
// EmployeeCounter.count
class EmployeeCounter {
  static count: number = 0;

  constructor() {
    EmployeeCounter.count++;
  }
}

const employee1 = new EmployeeCounter();
const employee2 = new EmployeeCounter();
const employee3 = new EmployeeCounter();

console.log(`Total employees: ${EmployeeCounter.count}`);

// ============================================================
// Exercise 10 — Polymorphism
// ============================================================

// Create a base class called Animal.

// Add:
// makeSound(): void

// Create:
// Dog extends Animal
// Cat extends Animal

// Override makeSound() in both classes.

// Create an array:
//
// const animals: Animal[]

// Add Dog and Cat objects.

// Loop through the array and call makeSound().

// Observe how the same method produces
// different behavior.
class Animal {
  makeSound(): void {
    console.log("Animal makes a sound");
  }
}

class Dog extends Animal {
  override makeSound(): void {
    console.log("Dog says: Woof");
  }
}

class Cat extends Animal {
  override makeSound(): void {
    console.log("Cat says: Meow");
  }
}

const animals: Animal[] = [new Dog(), new Cat()];

animals.forEach((animal) => {
  animal.makeSound();
});

// ============================================================
// Exercise 11 — Abstraction with Interface
// ============================================================

// Create an interface called PaymentMethod.

// Required methods:
//
// pay(amount: number): void
// refund(amount: number): void

// Create two classes:
//
// CreditCard
// PayPal

// Both classes must implement PaymentMethod.

// Provide different implementations
// for pay() and refund().
interface PaymentMethod {
  pay(amount: number): void;
  refund(amount: number): void;
}

class CreditCard implements PaymentMethod {
  pay(amount: number): void {
    console.log(`Paid ${amount} using Credit Card`);
  }

  refund(amount: number): void {
    console.log(`Refunded ${amount} to Credit Card`);
  }
}

class PayPal implements PaymentMethod {
  pay(amount: number): void {
    console.log(`Paid ${amount} using PayPal`);
  }

  refund(amount: number): void {
    console.log(`Refunded ${amount} to PayPal`);
  }
}

const creditCard = new CreditCard();
const paypal = new PayPal();

creditCard.pay(1000);
creditCard.refund(200);

paypal.pay(1500);
paypal.refund(300);

// ============================================================
// Exercise 12 — Abstraction with Abstract Class
// ============================================================

// Create an abstract class called Employee.

// Properties:
// - name: string

// Method:
// - getDetails(): void

// Abstract method:
// - calculateSalary(): number

// Create:
//
// FullTimeEmployee
// PartTimeEmployee

// Both classes should extend Employee
// and implement calculateSalary() differently.
abstract class EmployeeBase {
  constructor(public name: string) {}

  getDetails(): void {
    console.log(`Employee Name: ${this.name}`);
  }

  abstract calculateSalary(): number;
}

class FullTimeEmployee extends EmployeeBase {
  constructor(
    name: string,
    private monthlySalary: number,
  ) {
    super(name);
  }

  calculateSalary(): number {
    return this.monthlySalary;
  }
}

class PartTimeEmployee extends EmployeeBase {
  constructor(
    name: string,
    private hourlyRate: number,
    private workingHours: number,
  ) {
    super(name);
  }

  calculateSalary(): number {
    return this.hourlyRate * this.workingHours;
  }
}

const fullTimeEmployee = new FullTimeEmployee("Alice", 60000);
const partTimeEmployee = new PartTimeEmployee("Bob", 500, 80);

fullTimeEmployee.getDetails();
console.log(`Full-time salary: ${fullTimeEmployee.calculateSalary()}`);

partTimeEmployee.getDetails();
console.log(`Part-time salary: ${partTimeEmployee.calculateSalary()}`);

// ============================================================
// Exercise 13 — Combined OOP Challenge
// ============================================================

// Create an abstract class called Vehicle.

// Property:
// - protected brand: string

// Abstract method:
// - start(): void

// Create:
//
// Car
// Bike

// Both classes should extend Vehicle.

// Add different implementations of start().

// Then:
//
// 1. Create Car and Bike objects.
// 2. Store them in a Vehicle[] array.
// 3. Loop through the array.
// 4. Call start().
// 5. Observe polymorphism.

// Also use an appropriate access modifier
// to protect the brand property.
abstract class Vehicle {
  constructor(protected brand: string) {}

  abstract start(): void;
}

class Car extends Vehicle {
  start(): void {
    console.log(`${this.brand} car is starting with a key`);
  }
}

class Bike extends Vehicle {
  start(): void {
    console.log(`${this.brand} bike is starting with a button`);
  }
}

const car = new Car("Toyota");
const bike = new Bike("Yamaha");

const vehicles: Vehicle[] = [car, bike];

vehicles.forEach((vehicle) => {
  vehicle.start();
});

// vehicle.brand cannot be accessed here because brand is protected.
// The property is accessible inside Vehicle and its child classes.
