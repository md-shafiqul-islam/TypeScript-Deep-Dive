/*
 * TypeScript Deep Dive
 * Day 01 — Exercises
 *
 * Solve each exercise.
 * Avoid using `any` unless an exercise specifically asks for it.
 */

// ============================================================
// Exercise 01 — Primitive and Non-Primitive Types
// ============================================================

// Create variables with the following types:
// 1. Your name
// 2. Your age
// 3. Whether you are currently learning TypeScript
// 4. An array of three programming languages
// 5. An object containing your name and profession

// Write your solution here.
const myName: string = "Shafiqul";
const myAge: number = 32;
const isLearning: boolean = true;

const myLanguages: string[] = ["TypeScript", "JavaScript", "React"];

const mine: {
  myName: string;
  profession: string;
} = {
  myName: "Shafiqul",
  profession: "Developer",
};

// ============================================================
// Exercise 02 — Object, Literal, and Optional Types
// ============================================================

// Create a type named Product with:
// - name: string
// - price: number
// - category: "electronics" | "clothing" | "food"
// - discount?: number

// Create two valid products.
// Try creating one invalid product to observe the TypeScript error.

// Write your solution here.
type Product = {
  name: string;
  price: number;
  category: "electronics" | "clothing" | "food";
  discount?: number;
};

const product1: Product = {
  name: "Laptop",
  price: 50000,
  category: "electronics",
  discount: 5000,
};

const product2: Product = {
  name: "T-Shirt",
  price: 1200,
  category: "clothing",
};

// Invalid: missing required category.
// const invalidProduct: Product = {
//   name: "Mobile",
//   price: 25000,
//   discount: 3000,
// };

// ============================================================
// Exercise 03 — Functions in TypeScript
// ============================================================

// Write a function named calculateTotal that:
// - Accepts price: number and quantity: number
// - Returns the total price as a number

// Example:
// calculateTotal(250, 3) => 750

// Write your solution here.
function calculateTotal(price: number, quantity: number): number {
  return price * quantity;
}

console.log(calculateTotal(250, 3));

// ============================================================
// Exercise 04 — Type Alias
// ============================================================

// Create a type alias named Employee with:
// - name: string
// - employeeId: number
// - department: string
// - isActive: boolean

// Create a function named displayEmployee that accepts
// an Employee and returns a string.

// Write your solution here.
type Employee1 = {
  name: string;
  employeeId: number;
  department: string;
  isActive: boolean;
};

function displayEmployee(employee: Employee1): string {
  return `${employee.name} works in ${employee.department}.`;
}

const employee1: Employee1 = {
  name: "Shafiqul",
  employeeId: 101,
  department: "Engineering",
  isActive: true,
};

console.log(displayEmployee(employee1));

// ============================================================
// Exercise 05 — Union Type
// ============================================================

// Create a function named formatId that accepts:
// string | number
//
// If the value is a string, return it in uppercase.
// If the value is a number, return it as a string.
//
// Examples:
// formatId("emp-101") => "EMP-101"
// formatId(101) => "101"

// Write your solution here.
function formatId(input: string | number): string {
  if (typeof input === "string") {
    return input.toUpperCase();
  }

  return input.toString();
}

console.log(formatId("emp-101")); // EMP-101
console.log(formatId(101)); // 101

// ============================================================
// Exercise 06 — Intersection Type
// ============================================================

// Create two types:
// Person: name and age
// Contact: email and phone
//
// Create a type named User that combines both types.
// Create a valid User object.

// Write your solution here.
type Person1 = {
  name: string;
  age: number;
};

type Contact = {
  email: string;
  phone: string;
};

type User = Person1 & Contact;

const engineer: User = {
  name: "Alice",
  age: 32,
  email: "alice@gmail.com",
  phone: "+01251458711112",
};

// ============================================================
// Exercise 07 — Ternary Operator
// ============================================================

// Write a function named checkEligibility that accepts age.
// Return "Eligible" if age is 18 or above.
// Otherwise, return "Not eligible".
//
// Use the ternary operator.

// Write your solution here.
function checkEligibility(age: number): string {
  return age >= 18 ? "Eligible" : "Not eligible";
}

console.log(checkEligibility(21)); // Eligible
console.log(checkEligibility(16)); // Not eligible

// ============================================================
// Exercise 08 — Nullish Coalescing
// ============================================================

// Write a function named getDisplayName that accepts:
// string | null | undefined
//
// Return the provided name if it is not null or undefined.
// Otherwise, return "Guest".
//
// Test it with:
// "Shafiqul"
// null
// undefined
// ""

// Write your solution here.
function getDisplayName(input: string | null | undefined): string {
  return input ?? "Guest";
}

console.log(getDisplayName("Shafiqul")); // Shafiqul
console.log(getDisplayName(null)); // Guest
console.log(getDisplayName(undefined)); // Guest
console.log(getDisplayName("")); // ""

// ============================================================
// Exercise 09 — Optional Chaining
// ============================================================

// Create a type named Customer with:
// - name: string
// - address?: {
//     city: string;
//     country: string;
//   }
//
// Write a function that safely returns the customer's city.
// If the address is missing, return undefined.

// Write your solution here.
type Customer = {
  name: string;
  address?: {
    city: string;
    country: string;
  };
};

function getCustomerCity(customer: Customer): string | undefined {
  return customer.address?.city;
}

const customer1: Customer = {
  name: "Bob",
  address: {
    city: "Dhaka",
    country: "Bangladesh",
  },
};

const customer2: Customer = {
  name: "Alice",
};

console.log(getCustomerCity(customer1)); // Dhaka
console.log(getCustomerCity(customer2)); // undefined

// ============================================================
// Exercise 10 — Unknown Type
// ============================================================

// Write a function named processValue that accepts unknown.
//
// If the value is a string, return its uppercase version.
// If the value is a number, return its value multiplied by 2.
// Otherwise, return "Unsupported value".

// Write your solution here.
function processValue(value: unknown): string | number {
  if (typeof value === "string") {
    return value.toUpperCase();
  }

  if (typeof value === "number") {
    return value * 2;
  }

  return "Unsupported value";
}

console.log(processValue("hello")); // HELLO
console.log(processValue(10)); // 20
console.log(processValue(true)); // Unsupported value

// ============================================================
// Exercise 11 — Nullable Type
// ============================================================

// Create a variable named currentUser that can hold:
// - A string
// - null
//
// Write a function that returns:
// "Welcome, NAME" when a user exists.
// "Please log in" when the value is null.

// Write your solution here.
let currentUser: string | null = "Shafiqul";

function getUserMessage(user: string | null): string {
  if (user === null) {
    return "Please log in";
  }

  return `Welcome, ${user}`;
}

console.log(getUserMessage(currentUser)); // Welcome, Shafiqul
console.log(getUserMessage(null)); // Please log in

// ============================================================
// Exercise 12 — Never Type
// ============================================================

// Write a function named fail that:
// - Accepts an error message as a string.
// - Throws an Error.
// - Has the return type never.

// Write your solution here.
function fail(message: string): never {
  throw new Error(message);
}

// ============================================================
// Exercise 13 — Real-World Mini Challenge
// ============================================================

// Create a type named EmployeeRecord with:
// - id: number
// - name: string
// - role: "admin" | "manager" | "employee"
// - salary: number
// - phone?: string
//
// Create two employee records.
//
// Then write a function named getEmployeeSummary that:
// - Accepts an EmployeeRecord.
// - Returns a string containing the employee's name and role.
//
// Use optional chaining or nullish coalescing where appropriate.

// Write your solution here.
type EmployeeRecord = {
  id: number;
  name: string;
  role: "admin" | "manager" | "employee";
  salary: number;
  phone?: string;
};

function getEmployeeSummary(emp: EmployeeRecord): string {
  const phone = emp.phone ?? "No phone number";

  return `${emp.name} - ${emp.role} - ${phone}`;
}

const employee2: EmployeeRecord = {
  id: 1,
  name: "Al-amin",
  role: "manager",
  salary: 25000,
  phone: "012541",
};

const employee3: EmployeeRecord = {
  id: 1,
  name: "Bokul",
  role: "employee",
  salary: 20000,
  phone: "05244",
};

console.log(getEmployeeSummary(employee2));
