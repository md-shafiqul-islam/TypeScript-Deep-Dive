// ============================================================
// Day 01 — TypeScript Fundamentals Exercises
// ============================================================

// ============================================================
// Exercise 01 — Basic Types
// ============================================================

// Create variables for:
// - your name
// - your age
// - whether you are learning TypeScript
// - your favorite programming languages
let personName: string = "Alice";
let personAge: number = 25;
let isLearned: boolean = true;
let favoriteProgrammingLanguages: string[] = ["JavaScript", "TypeScript"];

// ============================================================
// Exercise 02 — Object
// ============================================================

// Create a Product object with:
// - name: string
// - price: number
// - category: string
const product: { name: string; price: number; category: string } = {
  name: "Laptop",
  price: 50,
  category: "Electronics",
};

// ============================================================
// Exercise 03 — Function
// ============================================================

// Create a function calculateTotal()
// Parameters:
// - price: number
// - quantity: number
// Return:
// - number
const calculateTotal = (price: number, quantity: number): number => {
  return price * quantity;
};

// ============================================================
// Exercise 04 — Type Alias
// ============================================================

// Create a User type with:
// - name
// - age
// - email
type UserType = {
  name: string;
  age: number;
  email: string;
};

// Create two users using the type.
const user10: UserType = {
  name: "Alice",
  age: 25,
  email: "alice@example.com",
};

const user11: UserType = {
  name: "Bob",
  age: 29,
  email: "bob@example.com",
};

// ============================================================
// Exercise 05 — Interface + Optional Property
// ============================================================

// Create an Employee interface with:
// - name
// - age
// - role
// - phone? optional
interface EmployeeInterface {
  name: string;
  age: number;
  role: string;
  phone?: string;
}

// Create two employees.
const employee10: EmployeeInterface = {
  name: "Alice",
  age: 24,
  role: "admin",
  phone: "1547288",
};

const employee11: EmployeeInterface = {
  name: "Bob",
  age: 21,
  role: "manager",
};

// ============================================================
// Exercise 06 — Union + Type Narrowing
// ============================================================

// Create a function formatId()
// It accepts string | number.

// If string:
// return uppercase.

// If number:
// return it as a string.
const formatId = (value: string | number) => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else {
    return value.toString();
  }
};

// ============================================================
// Exercise 07 — Literal Type
// ============================================================

// Create a Role type:
// "admin" | "manager" | "employee"
type Role = "admin" | "manager" | "employee";

// Create a function that accepts Role.
const userRole = (role: Role) => {
  if (role === "admin") {
    return "Admin Dashboard";
  } else if (role === "manager") {
    return "Manager Dashboard";
  } else {
    return "Employee Dashboard";
  }
};

// ============================================================
// Exercise 08 — Intersection Type
// ============================================================

// Create:
// Person -> name
// Contact -> email
type Person5 = { name: string };
type Contact5 = { email: string };
//
// Combine them using intersection.
type Person5Contact5 = Person5 & Contact5;
// Create one valid object.
const person10: Person5Contact5 = {
  name: "Alice",
  email: "alice@example.com",
};

// ============================================================
// Exercise 09 — Nullable Type
// ============================================================

// Create currentUser: string | null.
type currentUser10 = string | null;

// Create a function that returns:
// "Welcome, NAME"
// or
// "Please log in"
const displayUser = (user: currentUser10): string => {
  if (user !== null) {
    return `Welcome, ${user}`;
  }

  return "Please Log in";
};

// ============================================================
// Exercise 10 — Optional Chaining
// ============================================================

// Create a Customer interface with optional address.
// Address should contain city.
interface Customer10 {
  name: string;
  address?: {
    city: string;
  };
}

const customer15: Customer10 = {
  name: "Alice",
};

// Safely access city using optional chaining.
console.log(customer15?.address?.city);

// ============================================================
// Exercise 11 — Nullish Coalescing
// ============================================================

// Create a function that accepts string | null | undefined.

// Return the provided value or "Guest".
const display = (value: string | null | undefined) => {
  return value ?? "Guest";
};

// ============================================================
// Exercise 12 — unknown
// ============================================================

// Create a function processValue(value: unknown).

// If string:
// return uppercase.

// If number:
// return number * 2.

// Otherwise:
// return "Unsupported value".
const processValue1 = (value: unknown) => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 2;
  } else {
    return "Unsupported value";
  }
};

// ============================================================
// Exercise 13 — Ternary
// ============================================================

// Create checkEligibility(age: number).

// If age >= 18:
// "Eligible"

// Otherwise:
// "Not eligible"
const checkEligibility = (age: number): string => {
  return age >= 18 ? "Eligible" : "Not eligible";
};
// ============================================================
// Exercise 14 — never
// ============================================================

// Create a function fail(message: string): never.

// It should throw an Error with the message.
const fail1 = (message: string): never => {
  throw new Error(message);
};
