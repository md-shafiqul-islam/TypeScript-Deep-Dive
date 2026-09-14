/*
 * TypeScript Deep Dive
 * Day 01 — TypeScript Fundamentals
 *
 * Topics:
 * 1. Primitive and Non-Primitive Types
 * 2. Object, Literal, and Optional Types
 * 3. Functions in TypeScript
 * 4. Type Aliases
 * 5. Union and Intersection Types
 * 6. Ternary, Nullish Coalescing, Optional Chaining
 * 7. Nullable, Unknown, and Never
 */

// ============================================================
// 1. Primitive and Non-Primitive Types
// ============================================================

// Primitive types
let userName: string = "Shafiqul";
let age: number = 30;
let isDeveloper: boolean = true;
let emptyValue: null = null;
let notAssigned: undefined = undefined;
let largeNumber: bigint = 100n;
let uniqueId: symbol = Symbol("id");

console.log(userName, age, isDeveloper);
console.log(emptyValue, notAssigned, largeNumber, uniqueId);

// Non-primitive types
let skills: string[] = ["JavaScript", "TypeScript", "React"];

let developer: {
  name: string;
  experience: number;
} = {
  name: "Shafiqul",
  experience: 2,
};

function greet(): string {
  return "Hello from TypeScript";
}

console.log(skills);
console.log(developer);
console.log(greet());

// ============================================================
// 2. Object, Literal, and Optional Types
// ============================================================

// Object type
let employee: {
  name: string;
  employeeId: number;
  department: string;
} = {
  name: "Rahim",
  employeeId: 101,
  department: "Engineering",
};

console.log(employee);

// Literal type
let role: "admin" | "manager" | "employee" = "employee";

role = "admin";
role = "manager";

console.log(role);

// Optional properties
type UserProfile = {
  name: string;
  email: string;
  phone?: string;
};

const user1: UserProfile = {
  name: "Shafiqul",
  email: "shafiqul@example.com",
};

const user2: UserProfile = {
  name: "Rahim",
  email: "rahim@example.com",
  phone: "01700000000",
};

console.log(user1);
console.log(user2);

// ============================================================
// 3. Functions in TypeScript
// ============================================================

// Parameters and return type
function add(a: number, b: number): number {
  return a + b;
}

console.log(add(10, 20));

// Function returning void
function logMessage(message: string): void {
  console.log(message);
}

logMessage("Learning TypeScript");

// Optional parameter
function greetUser(name: string, greeting?: string): string {
  return `${greeting ?? "Hello"}, ${name}`;
}

console.log(greetUser("Shafiqul"));
console.log(greetUser("Shafiqul", "Good evening"));

// Default parameter
function calculateDiscount(price: number, discount = 10): number {
  return price - (price * discount) / 100;
}

console.log(calculateDiscount(1000));
console.log(calculateDiscount(1000, 20));

// Function type
let multiply: (a: number, b: number) => number;

multiply = (a, b) => a * b;

console.log(multiply(5, 4));

// ============================================================
// 4. Type Alias
// ============================================================

type Student = {
  name: string;
  age: number;
  department: string;
};

const student1: Student = {
  name: "Shafiqul",
  age: 30,
  department: "CSE",
};

console.log(student1);

// Type alias for a function
type Operation = (a: number, b: number) => number;

const subtract: Operation = (a, b) => a - b;

console.log(subtract(20, 8));

// ============================================================
// 5. Union and Intersection Types
// ============================================================

// Union type
let productId: string | number = 101;

console.log(productId);

productId = "PROD-101";

console.log(productId);

// Union with literal types
type PaymentStatus = "pending" | "paid" | "failed";

function showPaymentStatus(status: PaymentStatus): string {
  return `Payment status: ${status}`;
}

console.log(showPaymentStatus("paid"));

// Union narrowing
function printId(id: string | number): void {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id.toFixed(2));
  }
}

printId("emp-101");
printId(101);

// Intersection type
type Person = {
  name: string;
};

type Employee = {
  employeeId: number;
};

type Staff = Person & Employee;

const staffMember: Staff = {
  name: "Shafiqul",
  employeeId: 101,
};

console.log(staffMember);

// ============================================================
// 6. Ternary, Nullish Coalescing, Optional Chaining
// ============================================================

// Ternary operator
const userAge = 20;

const ageMessage = userAge >= 18 ? "Adult" : "Minor";

console.log(ageMessage);

// Nullish coalescing
const userNickname: string | null = null;

const displayName = userNickname ?? "Guest";

console.log(displayName);

const count = 0;

console.log(count || 10); // 10
console.log(count ?? 10); // 0

// Optional chaining
type Profile = {
  name: string;
  address?: {
    city: string;
  };
};

const profile: Profile = {
  name: "Shafiqul",
};

console.log(profile.address?.city); // undefined

// Optional method call
const userWithMethod = {
  greet(): string {
    return "Hello!";
  },
};

console.log(userWithMethod.greet?.());

// ============================================================
// 7. Nullable, Unknown, and Never
// ============================================================

// Nullable type
let selectedUser: string | null = null;

console.log(selectedUser);

selectedUser = "Shafiqul";

console.log(selectedUser);

// Nullable value with optional chaining
type Account = {
  username: string;
  email?: string;
};

const account: Account | null = {
  username: "shafiqul",
};

console.log(account?.email);

// Unknown type
let apiData: unknown = "Hello TypeScript";

if (typeof apiData === "string") {
  console.log(apiData.toUpperCase());
}

apiData = 123;

if (typeof apiData === "number") {
  console.log(apiData.toFixed(2));
}

// Never type
function throwError(message: string): never {
  throw new Error(message);
}

// Uncomment to test the function.
// throwError("Something went wrong");

// Exhaustive checking with never
type Status = "success" | "error";

function assertNever(value: never): never {
  throw new Error(`Unexpected value: ${value}`);
}

function handleStatus(status: Status): string {
  switch (status) {
    case "success":
      return "Operation successful";

    case "error":
      return "Operation failed";

    default:
      return assertNever(status);
  }
}

console.log(handleStatus("success"));
console.log(handleStatus("error"));
