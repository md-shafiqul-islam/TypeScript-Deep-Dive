// ============================================================
// 03 — Object-Oriented TypeScript Examples
// ============================================================

// ============================================================
// 01 — Class and Object
// ============================================================

class User {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet(): string {
    return `Hello, ${this.name}`;
  }
}

const person = new User("Shafiqul");

console.log(person.greet());

// ============================================================
// 02 — Inheritance
// ============================================================

class Animal {
  move(): void {
    console.log("Animal is moving");
  }
}

class Dog extends Animal {
  bark(): void {
    console.log("Woof");
  }
}

const dog = new Dog();

dog.move();
dog.bark();

// ============================================================
// 03 — Type Guard using typeof
// ============================================================

function printValue(value: string | number): void {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}

printValue("hello");
printValue(52);

// ============================================================
// 04 — Type Guard using in
// ============================================================

type Admin = {
  name: string;
  role: string;
};

type Employee = {
  name: string;
  salary: number;
};

function showInfo(user: Admin | Employee): void {
  if ("role" in user) {
    console.log(`Admin Role: ${user.role}`);
  } else {
    console.log(`Salary: ${user.salary}`);
  }
}

showInfo({
  name: "Alice",
  role: "Admin",
});

showInfo({
  name: "Bob",
  salary: 50000,
});

// ============================================================
// 05 — Type Guard using instanceof
// ============================================================

class Car {
  drive(): void {
    console.log("Driving");
  }
}

class Bike {
  ride(): void {
    console.log("Riding");
  }
}

function moveVehicle(vehicle: Car | Bike): void {
  if (vehicle instanceof Car) {
    vehicle.drive();
  } else {
    vehicle.ride();
  }
}

moveVehicle(new Car());
moveVehicle(new Bike());

// ============================================================
// 06 — Access Modifiers
// ============================================================

class BankAccount {
  public id: number;
  protected name: string;
  private balance: number;

  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this.balance = balance;
  }

  public showId(): void {
    console.log(`ID: ${this.id}`);
  }

  protected showName(): void {
    console.log(`Name: ${this.name}`);
  }

  private showBalance(): void {
    console.log(`Balance: ${this.balance}`);
  }

  public addBalance(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
    }
  }

  public getBalance(): number {
    return this.balance;
  }
}

class SavingsAccount extends BankAccount {
  displaySavingsInfo(): void {
    this.showId();
    this.showName();

    // this.showBalance();
    // Error: private members are not accessible in child classes.
  }
}

const account = new BankAccount(111, "Alice", 20);

account.showId();
account.addBalance(50);

console.log(account.getBalance());

// ============================================================
// 07 — Encapsulation
// ============================================================

class SecureBankAccount {
  private balance: number = 0;

  deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
    }
  }

  withdraw(amount: number): void {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
    }
  }

  getBalance(): number {
    return this.balance;
  }
}

const secureAccount = new SecureBankAccount();

secureAccount.deposit(1000);
secureAccount.withdraw(300);

console.log(secureAccount.getBalance());

// secureAccount.balance = -500;
// Error: balance is private.

// ============================================================
// 08 — Getter and Setter
// ============================================================

class Product {
  private _price: number = 0;

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    if (value >= 0) {
      this._price = value;
    }
  }
}

const product = new Product();

product.price = 500;

console.log(product.price);

// ============================================================
// 09 — Static
// ============================================================

class Counter {
  static count: number = 0;

  static increase(): void {
    Counter.count++;
  }

  static decrease(): void {
    Counter.count--;
  }
}

Counter.increase();
Counter.increase();

console.log(Counter.count);

Counter.decrease();

console.log(Counter.count);

// ============================================================
// 10 — Polymorphism
// ============================================================

class Shape {
  getArea(): number {
    return 0;
  }
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  getArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

class Rectangle extends Shape {
  constructor(
    private height: number,
    private width: number,
  ) {
    super();
  }

  getArea(): number {
    return this.height * this.width;
  }
}

const shape1 = new Shape();
const circle1 = new Circle(10);
const rectangle1 = new Rectangle(5, 10);

console.log(shape1.getArea());
console.log(circle1.getArea());
console.log(rectangle1.getArea());

// Polymorphism through a common parent type

const shapes: Shape[] = [new Circle(10), new Rectangle(5, 10)];

shapes.forEach((shape) => {
  console.log(shape.getArea());
});

// ============================================================
// 11 — Abstraction with Interface
// ============================================================

interface MediaPlayer {
  play(): void;
  pause(): void;
  stop(): void;
}

class MusicPlayer implements MediaPlayer {
  play(): void {
    console.log("Playing...");
  }

  pause(): void {
    console.log("Pausing...");
  }

  stop(): void {
    console.log("Stopping...");
  }
}

const musicPlayer = new MusicPlayer();

musicPlayer.play();
musicPlayer.pause();
musicPlayer.stop();

// ============================================================
// 12 — Abstraction with Abstract Class
// ============================================================

abstract class Payment {
  abstract pay(amount: number): void;
}

class CreditCardPayment extends Payment {
  pay(amount: number): void {
    console.log(`Paid ${amount} using Credit Card`);
  }
}

class CashPayment extends Payment {
  pay(amount: number): void {
    console.log(`Paid ${amount} using Cash`);
  }
}

const creditCardPayment = new CreditCardPayment();
const cashPayment = new CashPayment();

creditCardPayment.pay(1000);
cashPayment.pay(500);

// const payment = new Payment();
// Error: Cannot create an instance of an abstract class.
