// ============================================================
// 01 — Basic Types
// ============================================================

let userName: string = "Alice";
let age: number = 30;
let isDeveloper: boolean = true;

// ============================================================
// 02 — Array
// ============================================================

let friends: string[] = ["Alex", "Bob", "Charlie"];
let numbers: number[] = [10, 20, 30];
let isPassed: boolean[] = [true, false, true];

// ============================================================
// 03 — Object
// ============================================================

let user: {
  name: string;
  age: number;
} = {
  name: "Alice",
  age: 30,
};

// ============================================================
// 04 — Function
// ============================================================

const add = (a: number, b: number): number => {
  return a + b;
};

console.log(add(10, 20));

// ============================================================
// 05 — Type Inference
// ============================================================

let hasCar = false;
// TypeScript infers: boolean

// ============================================================
// 06 — Explicit Type vs Inference
// ============================================================

let rollNumber: number = 20;
let classSection = "B";
// TypeScript infers: string

// ============================================================
// 07 — Union Type
// ============================================================

let id: string | number;

id = "User-101";
id = 101;

// ============================================================
// 08 — Literal Type
// ============================================================

let role: "admin" | "manager" | "employee";

role = "admin";
// role = "student"; // Error

// ============================================================
// 09 — Type Alias
// ============================================================

type User = {
  name: string;
  age: number;
  email: string;
};

const user1: User = {
  name: "Allen",
  age: 16,
  email: "allen@gmail.com",
};

// ============================================================
// 10 — Interface
// ============================================================

interface Employee {
  name: string;
  age: number;
  email: string;
}

const employee1: Employee = {
  name: "Mac",
  age: 31,
  email: "mac@domain.com",
};

// ============================================================
// 11 — Optional Property
// ============================================================

interface Developer {
  name: string;
  age: number;
  email: string;
  hasLaptop?: boolean;
}

const appDeveloper: Developer = {
  name: "Smith",
  age: 24,
  email: "smith@gmail.com",
};

const webDeveloper: Developer = {
  name: "Henry",
  age: 28,
  email: "henry@gmail.com",
  hasLaptop: true,
};

// ============================================================
// 12 — Object as Function Parameter + void
// ============================================================

interface Person {
  name: string;
  age: number;
}

function printPerson(person: Person): void {
  console.log(`${person.name} - ${person.age}`);
}

printPerson({
  name: "Nail",
  age: 15,
});

// ============================================================
// 13 — any
// ============================================================

let hold: any;

hold = "Name";
hold = 15;
hold = true;

// ============================================================
// 14 — unknown
// ============================================================

let point: unknown = "Hello";

// point.toUpperCase(); // Error

if (typeof point === "string") {
  console.log(point.toUpperCase());
}

// ============================================================
// 15 — Type Narrowing
// ============================================================

const printId = (id: string | number): void => {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id.toFixed(2));
  }
};

printId("user-101");
printId(101);

// ============================================================
// 16 — Intersection Type
// ============================================================

interface Profile {
  name: string;
}

interface Contact {
  email: string;
}

type UserProfile = Profile & Contact;

const profile: UserProfile = {
  name: "Alex",
  email: "alex@gmail.com",
};

// ============================================================
// 17 — Nullable Type
// ============================================================

let currentUser: string | null = null;

currentUser = "Alex";

// ============================================================
// 18 — Optional Chaining
// ============================================================

interface Customer {
  name: string;
  address?: {
    city: string;
  };
}

const customer: Customer = {
  name: "Alex",
};

console.log(customer.address?.city);

// ============================================================
// 19 — Nullish Coalescing
// ============================================================

const displayName = currentUser ?? "Guest";

console.log(displayName);

// ============================================================
// 20 — Ternary Operator
// ============================================================

const userAge = 20;

const eligibility = userAge >= 18 ? "Eligible" : "Not eligible";

console.log(eligibility);

// ============================================================
// 21 — never
// ============================================================

function fail(message: string): never {
  throw new Error(message);
}

// fail("Something went wrong");
