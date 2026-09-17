# 03 — Object-Oriented TypeScript Notes

## 01 — Class and Object

A **class** is a blueprint for creating objects.

An **object** is an instance of a class.

```ts
class User {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet(): string {
    return `Hello, ${this.name}`;
  }
}

const user = new User("Alice");
```

- `class` → blueprint
- `new` → creates an object
- `constructor` → initializes the object
- `this` → refers to the current object

---

## 02 — Inheritance

Inheritance allows a child class to reuse properties and methods from a parent class.

```ts
class Animal {
  move(): void {
    console.log("Moving");
  }
}

class Dog extends Animal {
  bark(): void {
    console.log("Woof");
  }
}
```

- `extends` → creates inheritance
- Child class can use accessible members of the parent.
- `super()` is used to call the parent constructor.

---

## 03 — Type Guard using `typeof`

`typeof` checks the runtime type of a value and helps TypeScript narrow a union type.

```ts
function printValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}
```

Think:

> `typeof` → What primitive type is this value?

---

## 04 — Type Guard using `in`

The `in` operator checks whether a property exists in an object.

```ts
type Admin = {
  name: string;
  role: string;
};

type Employee = {
  name: string;
  salary: number;
};

function showInfo(user: Admin | Employee) {
  if ("role" in user) {
    console.log(user.role);
  } else {
    console.log(user.salary);
  }
}
```

Think:

> `in` → Does this property exist in the object?

---

## 05 — Type Guard using `instanceof`

`instanceof` checks whether an object is an instance of a particular class.

```ts
class Car {
  drive() {
    console.log("Driving");
  }
}

class Bike {
  ride() {
    console.log("Riding");
  }
}

function move(vehicle: Car | Bike) {
  if (vehicle instanceof Car) {
    vehicle.drive();
  } else {
    vehicle.ride();
  }
}
```

Think:

> `instanceof` → Is this object an instance of this class?

### Type Guard Summary

```text
typeof
→ primitive/value type

in
→ property existence

instanceof
→ class instance
```

---

## 06 — Access Modifiers

TypeScript provides three main access modifiers.

```text
public
protected
private
```

| Modifier    | Same Class | Child Class | Outside |
| ----------- | ---------- | ----------- | ------- |
| `public`    | Yes        | Yes         | Yes     |
| `protected` | Yes        | Yes         | No      |
| `private`   | Yes        | No          | No      |

Example:

```ts
class Account {
  public id: number;
  protected name: string;
  private balance: number;

  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this.balance = balance;
  }
}
```

---

## 07 — Encapsulation

Encapsulation means keeping internal data protected and controlling how it is accessed or modified.

```ts
class BankAccount {
  private balance: number = 0;

  deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
    }
  }

  getBalance(): number {
    return this.balance;
  }
}
```

Outside code cannot directly access:

```ts
// account.balance = -500;
```

Instead, it uses controlled methods:

```ts
account.deposit(500);
```

> `private`, `protected`, getters, setters, and methods can help implement encapsulation.

---

## 08 — Getter and Setter

Getters read a value, while setters control how a value is changed.

```ts
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

product.price = 100;
console.log(product.price);
```

```text
product.price = 100
→ setter runs

product.price
→ getter runs
```

Getters and setters allow property-like syntax while keeping control over the internal data.

---

## 09 — Static

A `static` member belongs to the class itself rather than an individual object.

```ts
class Counter {
  static count: number = 0;

  static increase(): void {
    Counter.count++;
  }
}

Counter.increase();
console.log(Counter.count);
```

Compare:

```text
instance property
→ belongs to each object

static property
→ belongs to the class
```

Static members are accessed using the class name:

```ts
Counter.count;
Counter.increase();
```

---

## 10 — Polymorphism

Polymorphism means the same method/interface can have different behavior depending on the actual object.

```ts
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
```

Different classes implement:

```ts
getArea();
```

in different ways.

A common polymorphic pattern:

```ts
const shapes: Shape[] = [new Circle(10), new Rectangle(5, 10)];

shapes.forEach((shape) => {
  console.log(shape.getArea());
});
```

---

## 11 — Abstraction with Interface

An interface can define a contract that a class must follow.

```ts
interface MediaPlayer {
  play(): void;
  pause(): void;
  stop(): void;
}

class MusicPlayer implements MediaPlayer {
  play(): void {
    console.log("Playing");
  }

  pause(): void {
    console.log("Paused");
  }

  stop(): void {
    console.log("Stopped");
  }
}
```

The interface describes **what must be provided**, while the class defines **how it works**.

---

## 12 — Abstraction with Abstract Class

An abstract class can contain abstract members that child classes must implement.

```ts
abstract class Payment {
  abstract pay(amount: number): void;
}

class CreditCardPayment extends Payment {
  pay(amount: number): void {
    console.log(`Paid ${amount}`);
  }
}
```

An abstract class cannot be directly instantiated:

```ts
// const payment = new Payment();
```

A child class must implement the abstract method.

### Interface vs Abstract Class

```text
Interface
→ mainly defines a contract

Abstract class
→ contract + can contain shared implementation
```

---

# How the Concepts Connect

```text
Class & Object
      ↓
Inheritance
      ↓
Access Modifiers
      ↓
Encapsulation
      ↓
Getter / Setter

Inheritance
      ↓
Method Overriding
      ↓
Polymorphism

Abstraction
      ├── Interface
      └── Abstract Class

Type Guards
      ├── typeof
      ├── in
      └── instanceof

Static
→ belongs to the class rather than an instance
```

# Key Revision Points

- Class = blueprint.
- Object = instance of a class.
- `extends` creates inheritance.
- `super()` calls the parent constructor.
- `public` is accessible everywhere.
- `protected` is accessible in the class and child classes.
- `private` is accessible only inside the same class.
- Encapsulation protects internal data and controls access.
- Getter reads a controlled property.
- Setter changes a controlled property.
- `static` belongs to the class.
- Polymorphism allows different implementations of the same method.
- Interface defines a contract.
- Abstract class can define abstract and implemented members.
- `typeof` is useful for primitive type narrowing.
- `in` checks property existence.
- `instanceof` checks class instances.

## Most Important for Real-World Development

Focus deeply on:

- Classes and Objects
- Inheritance
- Access Modifiers
- Encapsulation
- Type Guards
- Polymorphism
- Interfaces

Understand well:

- Getter and Setter
- Abstract Classes
- Static

The goal is to understand how these concepts work together rather than memorizing their definitions.
